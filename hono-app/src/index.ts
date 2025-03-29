import { Hono } from 'hono'

const app = new Hono()

//Middleware
app.use(async (c, next )=>{
  if(c.req.header("Authorization")){
    // Do Validation
    next()
  }else{
    return c.text("You dont have the access")
  }
})
async function authMiddleware(c:any, next:any){
  next()
}


//Routes
app.get('/', authMiddleware, async (c) => {
  return c.text('Hello Hono!')
})

app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body)
  console.log(c.req.query("params"))
  console.log(c.req.header("Authorization"))

  return c.text('Hono!')
})

export default app;

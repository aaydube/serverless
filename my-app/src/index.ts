
export default {
	async fetch(request, ctx, env):Promise<Response>{
		console.log(request.headers)
		console.log(request.body)
		
		if(request.method === "GET"){
			return Response.json({
				message:"Its a get request"
			})
		}else{
			return Response.json({
				message: "its not a get request"
			})
		}
	}

} satisfies ExportedHandler<Env>;
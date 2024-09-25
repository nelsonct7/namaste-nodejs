const http =require('node:http')

const server = http.createServer((req,res)=>{
    res.end("Sample response")
})



server.listen(3001,()=>{console.log("[!] Server started");})
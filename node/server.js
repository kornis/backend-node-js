const http = require("http");
const server = http.createServer();
const url = require('url');

server.on('request',(req,res) => {
    let year = new Date().getFullYear();
   if(req.method == "POST")
   {
    let myAge = year - req.body;
    console.log(req.body)
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(myAge);
      /* let body = [];
       req.on('data', chunk => {
           body.push(chunk);
       })
       .on('end', () => {
        
        //body = Buffer.concat(body).toString();
       
       })*/
      
   }
    
    
});

server.listen(3000, function(){console.log("Funcionando")});
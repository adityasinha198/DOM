const http = require('http')
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
    res.setHeader('Content-Type','text/html')
    if(req.url=="/home"){
    res.write('<html>')
    res.write('<head><title>My first page </title></head>')
    res.write(('<body><h1>Welcome home </h1></body>'))
    res.write('</html>')

    res.end()}
    else if(req.url=="/about"){
        
    res.write('<html>')
    res.write('<head><title>My first page </title></head>')
    res.write(('<body><h1>Welcome to about us page </h1></body>'))
    res.write('</html>')

    res.end()}
    else if(req.url=="/node"){
        
        res.write('<html>')
        res.write('<head><title>My first page </title></head>')
        res.write(('<body><h1>Welcome to my Node.js project</h1></body>'))
        res.write('</html>')
    
        res.end()}
    
    
})
server.listen(3000)
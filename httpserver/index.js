const http = require ("http")

const server = http.createServer((req, res) => {
    // console.log(req.url)
    if(req.url == "/"){
        res.end('Hello from the other side')
    }else if(req.url == "/about"){
        res.end('Hello from about us')
    }else{
        res.writeHead(404, {"Content-type": "text/html"})
        res.end('<h1>404 Page Error</h1>')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening port no. 8000')
}) 
const http = require ("http")
const fs = require ('fs')

const data = fs.readFileSync('./userapi.json', 'utf-8')
const obj = JSON.parse(data)

const server = http.createServer((req,res) => {

    if(req.url == '/'){
        res.end('Hello from HOME')
    }else if(req.url == '/about'){
        res.end('Hello from about')
    }else if(req.url == '/api'){
        res.writeHead(200,{'content-type' : 'application/json'})
        res.end(obj[0].name)
    }else{
        res.writeHead(404, {'content-type' : 'text/html'})
        res.end("<h1>404 Page doesn't exist</h1>")
    }
})

server.listen(8000, () => {
    console.log('listening port 8000')
})
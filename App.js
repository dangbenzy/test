const http = require('http')

const server= http.createServer((req, res)=>{
    if(req.url=="/"){
        res.end('Welcome to our homepage!')
    }
    if (req.url=='/about'){
        res.end('This is the about page')
    }
    res.end(`
        <h1>Oops</h1>
        <p>The page you seek dosent exist</p>
        <a href="/">homepage</a>
   ` )
})

server.listen(5000)
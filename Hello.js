const http = require('http')  //http is the module that is used to handle request and response
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    var a=10;
    var b=20;
    var c = a+b;
    res.end('result is '+c)
  })


  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  }) 


/*
 * Temp file to load pages
 * Use "npm start" in home repo to start program in production
 * Use "npm run dev" to run in developer mode (automatic server refresh)
 * - Dom
 */

var http = require('http')
var fs = require('fs')
var css = fs.readFileSync('./public/style.css', 'utf8')
var js = fs.readFileSync('./public/index.js', 'utf8')
var html = fs.readFileSync('./public/index.html', 'utf8')
var aboutUs = fs.readFileSync('./public/aboutus.html', 'utf8')
var savedItems = fs.readFileSync('./public/saveditems.html', 'utf8')
var invalidPage = fs.readFileSync('./public/404.html', 'utf8')

var server = http.createServer(function(req,res) {
    console.log("request recieved. URL:", req.url)
    if (req.url === "/" || req.url === "/index.html") {
        res.statusCode = 200
        res.statusMessage = "Success"
        res.setHeader('content-type', 'text/html')
        res.write(html)
    }
    else if (req.url === "/aboutus.html") {
      res.statusCode = 200
      res.statusMessage = "Success"
      res.setHeader('content-type', 'text/html')
      res.write(aboutUs)
    }
    else if (req.url === "/saveditems.html") {
        res.statusCode = 200
        res.statusMessage = "Success"
        res.setHeader('content-type', 'text/html')
        res.write(savedItems)
      }
    else if (req.url === "/style.css") {
        res.statusCode = 200
        res.statusMessage = "Success"
        res.setHeader('content-type', 'text/css')
        res.write(css)
    }
    else if (req.url === "/index.js") {
        res.statusCode = 200
        res.statusMessage = "Success"
        res.setHeader('content-type', 'application/javascript')
        res.write(js)
    }
    else {
        res.statusCode = 404
        res.statusMessage = "File not found"
        res.setHeader('content-type', 'text/html')
        res.write(invalidPage)
    }
    res.end()
})


var port = (process.env.PORT === undefined)? 3000 : process.env.PORT
server.listen(port, function () {
    console.log("server is listening on port", port)
})

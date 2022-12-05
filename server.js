/*
 * Temp file to load pages
 * Use "npm start" in home repo to start program in production
 * Use "npm run dev" to run in developer mode (automatic server refresh)
 * - Dom
 */

var path = require('path')
var express = require('express')
var fs = require('fs')

var app = express()
var port = process.env.PORT || 3000


app.use(express.json())
app.use(express.static('public'))

app.get('/', function(req, res) { 
    res.status(200).render('./index.html')
})

app.get('/aboutus.html', function(req, res) { 
    res.status(200).render('./aboutus.html')
})

app.get('/saveditems', function(req, res) { 
    res.status(200).render('./saveditems.html')
})

app.get('*', function(req, res) {
    res.status(404).render('./404.html')
})

app.listen(port, function () {
    console.log("== Server is listening on port", port)
})

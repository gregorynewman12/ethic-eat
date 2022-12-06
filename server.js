/*
 * Temp file to load pages
 * Use "npm start" in home repo to start program in production
 * Use "npm run dev" to run in developer mode (automatic server refresh)
 * - Dom
 */

var path = require('path')
var express = require('express')
var exphbs = require("express-handlebars")
var items = require("./items.json")
var fs = require('fs')
var app = express()
var port = process.env.PORT || 3000

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}))
app.set("view engine", "handlebars")

app.use(express.json())
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.status(200).render('index', {
        itemList: items.all,
    })
})

app.get('/index.html', function (req, res) {
    res.status(200).render('index', {
        itemList: items.all
    })
})

app.get('/aboutus.html', function (req, res) {
    res.status(200).render('aboutus')
})

app.get('/saveditems.html', function (req, res) {
    if (items.saved.length == 0) {
        var itemSaved = 1
    }
    res.status(200).render('saveditems', {
        itemList: items.saved,
        itemSaved: itemSaved,
    })
})

app.post('/saveditems/addItem', function (req, res, next) {
    console.log("== req.body:", req.body)
    if (req.body) {
        items.saved.push({
            name: req.body.name,
            imageURL: req.body.imageURL,
            type: req.body.type,
            ethicalityScore: req.body.ethicalityScore,
            textDescription: req.body.textDescription,
            vegetarian: req.body.vegetarian,
            vegan: req.body.vegan,
            produce: req.body.produce,
            inSeason: req.body.inSeason,
            alternatives: req.body.alternatives
        })
        fs.writeFile(
            __dirname + '/items.json',
            JSON.stringify(items, null, 2),
            function (err) {
                if (err) {
                    res.status(500).send("Error writing new data.  Try again later.")
                } else {
                    res.status(200).send()
                }
            }
        )
    } else {
        res.status(400).send("BRUH")
    }
})

app.get('*', function (req, res) {
    res.status(404).render('404')
})

app.listen(port, function () {
    console.log("== Server is listening on port", port)
})

const express = require('express')
const path = require('path')
const app = express()

const Jim = require('./modules/jim')

// index.html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/pages/index.html'))
})

app.get('/api/:var', (req, res) => {
    res.json({ "you said" : req.params.var })
})

app.use('/jim', Jim)

module.exports = app
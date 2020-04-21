const app = require('express')()

app.get('/', (req, res) => {
    res.send('welcome to Jim\'s page')
})

app.get('/:person', (req, res) => {
    res.send(`Jim knows ${req.params.person}`)
})

module.exports = app
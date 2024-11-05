const path = require('path')
const express = require('express')
const { title } = require('process')
//const hbs = require('hbs')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'My Message For You',
        body: 'Jesus Christ is Our Lord and Savior , He saved us from eternal destruction, may his name be blessed for ever and ever, AMen!'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Bereket Negash'
    })
})

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: ' Bekako'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It will rain',
        location: 'Dubai'
    })
})

app.listen(3000, () => {
    console.log('express is running on 3000')
})
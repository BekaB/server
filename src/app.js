const path = require('path')
const express = require('express')
const { title } = require('process')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()

// define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

// static directory setup
app.use(express.static(publicDirectoryPath))

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'My Message For You',
        body: 'Jesus Christ is Our Lord and Savior , He saved us from eternal destruction, may his name be blessed for ever and ever, AMen!',
        name: 'Bekako'
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
    if(!req.query.address){
        return res.send({
            Error: 'You Must Provide Address'
        })
    }

    geocode(req.query.address, (error, {latitude, longitudie, location} = {})=>{
        //console.log('Error', error)
        if(error){
            return res.send({Error: 'You Must Provide Address'})
            //console.log('error')
        }
        forecast(latitude, longitudie, (error,forecastdata) => {
            //console.log('Error', error)
            if(error){ 
                return res.send({Error: 'You Must Provide Address'})
                //console.log(error)
            }
            res.send({
                forecast: forecastdata,
                location,
                address: req.query.address
            })
            // console.log(location)
            // console.log(forecastdata)
        })
    })
    
})

app.get('/products', (req, res) =>{
    if(!req.query.search){
        return res.send({
            error: 'you must provide search'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('help404',{
        title: '404 Error',
        message: 'Help Article Not Found',
        name: 'Bereket' 
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title: '404 Error',
        message: 'Page not Found',
        name: 'Bereket'
    })
})

app.listen(3000, () => {
    console.log('express is running on 3000')
})
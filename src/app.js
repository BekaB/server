const path = require('path')
const express = require('express')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It will rain',
        location: 'Dubai'
    })
})

app.listen(3000, () => {
    console.log('express is running on 3000')
})
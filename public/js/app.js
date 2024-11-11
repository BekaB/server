console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    fetch('https://api.weatherstack.com/current?access_key=a818ae5bf8e13c72847c794148f22f96&query='+location).then((response)=>{
        response.json().then((data) => {
            if(data.error){
                return console.log(data.error)
            }else{
            console.log(data.location.name)
            console.log(data.current.weather_descriptions[0])
        }
    
        })
    })
})
console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')

//messageOne.textContent = 'Jesus Saves'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''

    fetch('https://api.weatherstack.com/current?access_key=a818ae5bf8e13c72847c794148f22f96&query='+location).then((response)=>{
        response.json().then((data) => {
            if(data.error){
                return messageOne.textContent = 'Unable to Find Location , Please try Another Search'
            }else{

                messageOne.textContent = data.location.name
                messageTwo.textContent = data.current.weather_descriptions[0]
            //console.log(data.location.name)
            //console.log(data.current.weather_descriptions[0])
        }
    
        })
    })
})
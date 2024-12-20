console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''

    fetch('/weather?address='+location+ '').then((response)=>{
        response.json().then((data) => {
            if(data.error){
                return messageOne.textContent = 'Unable to Find Location , Please try Another Search'
            }else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            //console.log(data.location.name)
            //console.log(data.current.weather_descriptions[0])
            }
        })
    })
})
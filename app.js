// Variables elements du dom
const form = document.getElementById('form')
const input = document.getElementById('input')
const submitBtn = document.getElementById('submit')
const resetBtn = document.getElementById('reset')

// Variables API

const apiUrl = 'http://www.omdbapi.com/?apikey=API KEY HERE !'


//function omdbApi

async function omdbApi(entree){
    const result = await fetch(`${apiUrl}${entree}`)
    const data = await result.json()
    const display = document.querySelector('h2')
    const imgDisplay = document.querySelector('img')
    display.innerHTML = `Resultat pour le film ${entree} : <br>Titre = ${data.Title}<br>Année : ${data.Year}<br>Rated :
     ${data.Rated}<br>Genre : ${data.Genre}<br>Sorti le :  ${data.Released}<br>Durée : ${data.runtime}<br>Synopsis : 
     ${data.Plot}<br>Réalisateur : ${data.Director}<br>Ecriture : ${data.Writer}<br>Acteurs : ${data.Actors}
     <br>Langue de sorti : ${data.Language}<br>Diffusion premiere : ${data.Country}<br>Récompense : ${data.Awards}
     <br>Box office : ${data.BoxOffice}<br>Production : ${data.Production}<br>Site web : ${data.Web}`
     
    imgDisplay.src = data.Poster 
}


// function changeLeft
function changeLeft (){
    const showRes =document.getElementById('show-res')
    const imgDisplayShow =document.querySelector('img')
    showRes.style.left ='0'
    imgDisplayShow.style.right ='0'
}
 //Reset function

 function resetBtnfun(){
    const resBtn = document.getElementById('show-res')
    const imgDisplayShow =document.querySelector('img')
    resBtn.style.left = "-400px"
    imgDisplayShow.style.right ='-500px'
    input.value = ''
 }   



// Event listener


form.addEventListener('submit' , event =>{
        event.preventDefault()
        omdbApi(input.value)
        changeLeft()
        
})


form.addEventListener('reset' , event =>{
    event.preventDefault()
    resetBtnfun()
    
})

const reviews = [
    {"id":1,
    "email":"michael.lawson@reqres.in",
    "first_name":"Michael",
    "last_name":"Lawson",
    "img":"https://reqres.in/img/faces/7-image.jpg"},

    {"id":2,
    "email":"lindsay.ferguson@reqres.in",
    "first_name":"Lindsay",
    "last_name":"Ferguson",
    "img":"https://reqres.in/img/faces/8-image.jpg"},

    {"id":3,
    "email":"tobias.funke@reqres.in",
    "first_name":"Tobias",
    "last_name":"Funke",
    "img":"https://reqres.in/img/faces/9-image.jpg"},

    {"id":4,
    "email":"byron.fields@reqres.in",
    "first_name":"Byron",
    "last_name":"Fields",
    "img":"https://reqres.in/img/faces/10-image.jpg"},

    {"id":5,
    "email":"george.edwards@reqres.in",
    "first_name":"George",
    "last_name":"Edwards",
    "img":"https://reqres.in/img/faces/11-image.jpg"},

    {"id":6,
    "email":"rachel.howell@reqres.in",
    "first_name":"Rachel",
    "last_name":"Howell",
    "img":"https://reqres.in/img/faces/12-image.jpg"},
];
    

let indexToBeDisplayed = 0

const currentElement = reviews[indexToBeDisplayed]

const imageElement = document.querySelector("#image")
const nameElement = document.querySelector(".first_name")
const jobElement = document.querySelector(".last_name")
const textElement = document.querySelector(".email")

const nextBtn = document.querySelector("#next")
const prevBtn = document.querySelector("#prev")
const randomBtn = document.querySelector("#random")

nextBtn.addEventListener('click', displayNext)
prevBtn.addEventListener('click', displayPrev)

randomBtn.addEventListener('click', displayRandom)

function displayNext(){
    if(indexToBeDisplayed === reviews.length-1){
        indexToBeDisplayed = 0
    }else{
        indexToBeDisplayed++
    }
    console.log(indexToBeDisplayed)
    updateScreen( reviews[indexToBeDisplayed] )
}

function displayPrev(){
    if(indexToBeDisplayed === 0){
        indexToBeDisplayed = reviews.length-1
    }else{
        indexToBeDisplayed--
    }
    console.log(indexToBeDisplayed)
    updateScreen( reviews[indexToBeDisplayed] )
}

function displayRandom(){
    console.log("display random user details")
}

function updateScreen(virat){
    nameElement.innerText = virat.first_name
    jobElement.innerText = virat.last_name
    textElement.innerText = virat.email
    imageElement.src = virat.img
}

updateScreen(currentElement)

//the form

const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', (event=>{
    event.preventDefault();

    const dt = searchForm.search.value.trim();
    console.log(dt);
}))

 

// we will be fetching data from the Mars Rover API

const apK = "7k2p6Ys2NIb4N6A6n771LTgCOapH2YBh9JlAy1G9";
const base = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=";
const comb = base + apK;

let container = document.getElementById("nasaPhotos");
let i;

const xhr = new XMLHttpRequest();

xhr.open("GET", comb, true);

xhr.onload = function(){
    let json = JSON.parse(this.responseText);
    setInterval(() => {
        i = parseInt((Math.random() * 800) + 1);
        container.src = json.photos[i].img_src;
    }, 2000);
}

xhr.send();



let roverName = 0;
goFitch(comb).then(data=>{
    roverName = data.photos[1].camera.name;
    console.log(roverName);
}).catch(err=>{
    console.log(err);
})

let ptag = document.querySelector("p");
ptag.innerHTML += `<strong> Rover Name: ${roverName}</strong>`;

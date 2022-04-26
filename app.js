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




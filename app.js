
// we will be fetching data from the Mars Rover API
const apK = "7k2p6Ys2NIb4N6A6n771LTgCOapH2YBh9JlAy1G9";
const base = "https://api.nasa.gov/mars-photos/api/v1/rovers";
//get rover by name
const goFitch = async (rovername,camera,date )=> {


   

    
    const userInp = `/${rovername}/photos?sol=1000&${camera}&earth_date=${date}&api_key=${apK}`;

    const comb = base + userInp;

    console.log("I am here")
    console.log(comb);


    const response = await fetch(comb);
    const data = await response.json();

    return data;

};




// goFitch('curiosity').then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })

// console.log("working");


// let roverName = 0;
// goFitch(comb).then(data=>{
//     roverName = data.photos[1].camera.name;
//     console.log(roverName);
// }).catch(err=>{
//     console.log(err);
// })

// let ptag = document.querySelector("p");
// ptag.innerHTML += `<strong> Rover Name: ${roverName}</strong>`;
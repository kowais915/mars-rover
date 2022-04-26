// we will be fetching data from the Mars Rover API
const apK = "7k2p6Ys2NIb4N6A6n771LTgCOapH2YBh9JlAy1G9";
const base = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=";
const comb = base + apK;
console.log(comb);

const goFitch = async (resource)=> {
    const response = await fetch(resource);
    const data = await response.json();

    return data;

};


console.log("working");
goFitch(comb).then(data=>{
    console.log(data.photos[1].id);
}).catch(err=>{
    console.log(err);
})
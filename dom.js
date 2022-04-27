let camera = "";
let rover ="";
let date ="";

//the form

// const searchForm = document.querySelector('form');

// searchForm.addEventListener('submit', (event=>{
//     event.preventDefault();

//     const rover = searchForm.search.value.trim();
//     console.log(dt);

   
    
// }));

//dropdown for rovers
const rov = document.getElementById('rovers');
rov.addEventListener('change', event=>{

    rover = event.target.value;

})


//the dropdown
const cam = document.getElementById('drop');
cam.addEventListener('change', event=>{
    camera = event.target.value;
})

//the date
const detect = (event)=>{
    date = event.target.value;
}




//details
const details = document.getElementById('details');

const button = document.getElementById('btn');
button.addEventListener('click', event=>{
    goFitch(rover, camera, date).then(data=>{
        console.log(data);
        // rover details

        for(let i = 0; i<5; i++){
        details.innerHTML += `
        <div style="height: 300px">
            <h3>Name: ${data.photos[i].rover.name}</h3>
            <h4>Launch: ${data.photos[i].rover.launch_date}</h4>
            <h4>Landed: ${data.photos[i].rover.landing_date} </h4>
           
            <img src="${data.photos[i].img_src}"/> 
            </div>
           
        
        `
        }

        document.reset();


    }).catch(err=>{
        console.log(err);
    })
})




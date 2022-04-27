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
        details.innerHTML = `
        
            <h3>Name: ${data.photos[4].rover.name}</h3>
            <h4>Launch: ${data.photos[0].rover.launch_date}</h4>
            <h4>Landed: ${data.photos[0].rover.landing_date} </h4>
            <div style="height: 300px">
            <img src="${data.photos[0].img_src}"/> 
            </div>

        
        `
        


    }).catch(err=>{
        console.log(err);
    })
})




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
        details.innerHTML = `

        <div class="container">
        <div class="row">
        <div class="col-sm">

            <div class="card" style="width: 18rem;">
            <img src="${data.photos[i].img_src}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data.photos[i].rover.name}</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>


        </div>
        <div class="col-sm">
            <div class="card" style="width: 18rem;">
            <img src="${data.photos[i+1].img_src}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data.photos[i].rover.name}</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>

      
        </div>
        <div class="col-sm">
                <div class="card" style="width: 18rem;">
                <img src="${data.photos[i+2].img_src}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${data.photos[i].rover.name}</h5>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
        </div>
        </div>
        </div>










       
    
       
        
        `
        }

     


    }).catch(err=>{
        console.log(err);
    })
})




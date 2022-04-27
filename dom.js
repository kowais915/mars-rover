//the form

const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', (event=>{
    event.preventDefault();

    const dt = searchForm.search.value.trim();
    console.log(dt);

    goFitch(dt).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })
    
}))

 
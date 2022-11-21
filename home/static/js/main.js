let body = document.body
let toggle = document.querySelector('.toggle')
let icon = document.querySelector('.af-moon')
let iconB = document.querySelector('.dark')

toggle.onclick = () =>{
    body.classList.toggle('dark')
    if(body.classList.contains('dark')){
        icon.classList.replace('fa-moon', 'fa-sun');
    }else{
        icon.classList.replace('fa-sun', 'fa-moon')
    }
}
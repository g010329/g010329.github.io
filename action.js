const welcome = document.getElementById('welcome');
welcome.addEventListener("click",()=>{
    welcome.innerHTML = 'Have a Good Time!';
});

const toggleList = document.getElementById('toggleList');
const listDiv = document.getElementById('listDiv');
const trigger = document.getElementById('trigger');

toggleList.addEventListener('click',() => {
    listDiv.style.display='none';
});
trigger.addEventListener('click',()=>{
    listDiv.style.display='block';
});

const callAction = document.getElementById('callAction');
const more = document.getElementById('more');
callAction.addEventListener('click',()=>{
    if (more.style.display == 'none' || more.style.display == '') {
        console.log('show');
        more.style.display='flex';
    } else {
        more.style.display='none';
    }
    
}) ;
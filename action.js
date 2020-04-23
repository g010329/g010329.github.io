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
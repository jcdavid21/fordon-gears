const bar = document.getElementById("bar");
const list = document.querySelector('.left');
let count = 0
bar.addEventListener("click", ()=>{
    if(count === 0){
        list.style.height = '125px';
        count++
    }else{
        list.style.height = '0';
        count--;
    }
})
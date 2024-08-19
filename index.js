

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0;

function increment(){
    count = count + 1
    countEl.innerText = count
}

function save(){ 
total += count
totalEl.innerText = "Total people in the festival: " + total;
let savedStr = count + " , "
saveEl.textContent += savedStr;
countEl.textContent = 0
count = 0

}

function decrement(){
count -= 1;
countEl.textContent = count;
}


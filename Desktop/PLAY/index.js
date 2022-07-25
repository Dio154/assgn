let header = document.querySelector('h1')
let dec = document.querySelector('.dec')
let res = document.querySelector('.res')
let inc = document.querySelector('.inc')

//decrease
function decrease(){
    header.textContent--
    document.body.style.color = 'blue'
}

dec.addEventListener('click', decrease)

//reset
function reset(){
    header.textContent = 0
    document.body.style.backgroundColor = 'red'
}
res.addEventListener('click',reset)

//inrease
function increase(){
    header.textContent++
    document.body.style.backgroundColor = 'green'
}
inc.addEventListener('click', increase)

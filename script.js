let head = document.getElementById('head'); 

let p1 = document.getElementById('p1');

let p2 = document.getElementById('p2');

let btnDark = document.getElementById('dark');

let btnLight = document.getElementById('light');

btnDark.addEventListener('click', darkMode);

btnLight.addEventListener('click', lightMode);



function darkMode(){
    document.body.style.backgroundColor = 'black';
    head.style.color = 'white';
    p1.style.color = 'white';
    p2.style.color = 'white';
}

function lightMode(){
    document.body.style.backgroundColor = 'white';
    head.style.color = 'black';
    p1.style.color = 'black';
    p2.style.color = 'black';
}
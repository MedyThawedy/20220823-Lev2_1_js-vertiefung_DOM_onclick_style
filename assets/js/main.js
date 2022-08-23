
let el1 = document.getElementById('navChange');
let b = false;

el1.addEventListener('click', (e) => {
    if (b === false) {
        document.getElementById('navHome').style.backgroundColor = 'pink';
        b = true;
    } else {
        document.getElementById('navHome').style.backgroundColor = '#333';
        b = false;
    }

});
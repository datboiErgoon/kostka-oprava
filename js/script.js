const kostka = document.getElementById('kostka');
const statistika = document.getElementById('statistika');
const tlacitko = document.getElementById('tlacitko');
let hod = 1;
let hody = [];
let timer = false;


function animace() {
    hod = Math.ceil(Math.random() * 6);
    kostka.src = 'img/kostka' + hod + '.png';
}

tlacitko.addEventListener('click', function() {
    if (!timer) {
        timer = setInterval(animace, 120);
        tlacitko.innerText = 'STOP';
    } else {
        clearInterval(timer);
        timer = false;
        tlacitko.innerText = 'HREJ';
        hody.push(hod);
        console.log(hody);
        vypisStatistiky();
    } 
})

function suma () {
    let sum = 0;
    for (let i = 0; i < hody.length; i++){
        sum += hody[i];
    }
    return sum;
}

function max () {
    let maximum = 1;
    hody.forEach(function(value, index) {
        if (value > maximum) maximum = value;
    })
    return maximum;
}

function min () {
    let minimum = 6;
    hody.forEach(function(value, index){
        if(value < minimum) minimum = value;
    })
    return minimum;
}

function vypisStatistiky() {
    statistika.innerHTML =  `<p>Poslední hod: ${hod}</p>`;  
    statistika.innerHTML +=  `<p>Počet hodů: ${hody.length}</p>`;  
    statistika.innerHTML +=  `<p>Součet: ${suma()}</p>`;  
    statistika.innerHTML +=  `<p>Průměr: ${(suma() / hody.length).toFixed(2)}</p>`;  
    statistika.innerHTML +=  `<p>Maximum: ${max()}</p>`;  
    statistika.innerHTML +=  `<p>Minimum: ${min()}</p>`;  
}
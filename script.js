let selecionar = document.querySelector('.select');
let chave = document.querySelector('.chave-cont');
let codificar = document.querySelector('#codificar');
let decodificar = document.querySelector('#decodificar');

// Chave da Cifra de César//

selecionar.addEventListener("click", function () {
    if(selecionar.value == "cifra") {
        chave.style.display = "block";
    } else {
        chave.style.display = "none";
    }
})

// Codificação Base64

codificar.addEventListener('click', () =>{
    resultado.value = btoa(resultado.value);
})

decodificar.addEventListener('click', () =>{
    resultado.value = atob(resultado.value);
})
let codificar = document.querySelector('#codificar');
let decodificar = document.querySelector('#decodificar');
let resultado = document.querySelector('textarea');

codificar.addEventListener('click', () =>{
    resultado.value = btoa(resultado.value);
})

decodificar.addEventListener('click', () =>{
    resultado.value = atob(resultado.value);
})
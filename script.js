let codificar = document.querySelector('#code');
let decodificar = document.querySelector('#decode');
let resultado = document.querySelector('textarea');

codificar.addEventListener('click', () =>{
    resultado.value = btoa(resultado.value);
})

decodificar.addEventListener('click', () =>{
    resultado.value = atob(resultado.value);
})
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

function base64() {
    let texto = document.querySelector("#texto").value;

    if(codificar.checked) {
        let codificado = btoa(texto);
        return codificado;
    } else if(decodificar.checked) {
        let decodificado = atob(texto);
        return decodificado;
    }
}

// Codificação Cifra de César

function base64() {
    let text = document.querySelector("#texto").value;
    let chave = parseInt(document.querySelector("range").value);
    let saida = '';

    if(codificar.checked) {
        for(let i = 0; i < text.length; i++){
            if(text[i] === text[i].toUpperCase()){
                saida += String.fromCharCode((text.charCodeAt(i) + chave - 65) % 26 + 65);
            } else {
                saida += String.fromCharCode((text.charCodeAt(i) + chave - 97) % 26 + 97);
            }
        }
        return saida;
    } else if (decodificar.checked) {
        for(let i = 0; i < text.length; i++){
            if(text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122 {
                saida += String.fromCharCode((text.charCodeAt(i) - 97 -  chave + 26) % 26 + 97);
            } else if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
                saida += String.fromCharCode((text.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
            } else {
                saida += String.fromCharCode(text.charCodeAt(i));
            }
        }
        return saida;
    }
}

// Botão
radiobtn.addEventListener("click", function () {
    if (codificar.checked) {
      btn.innerHTML = "Codificar Mensagem!";
    } else if (decodificar.checked) {
      btn.innerHTML = "Decodificar Mensagem!";
    }
  });
  
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (selecione.value === "base64") {
      resultado.innerText = base64();
    } else if (selecione.value === "cifra") {
      resultado.innerText = cifraCesar();
    }
  });
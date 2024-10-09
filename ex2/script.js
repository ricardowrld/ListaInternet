//criar referencias aos elementos do mundo HTML
//para podermos manipular os atributos, ações, etc

//criar um programa que leia quatro números e calcule a media e mostre no h2
//na cor blue

const frm = document.querySelector("form");
const resposta = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor1 = Number(frm.inValor1.value);
    const valor2 = Number(frm.inValor2.value);
    const valor3 = Number(frm.inValor3.value);

    
    notas = `${(valor1 + valor2 + valor3) / 3}`
    if (notas >= 7) {
        resposta.innerText = `Aprovado! A nota foi ${notas}`
        resposta.style.color = `green`
    } else if (notas < 7 && notas >= 4) {
        resposta.innerText = `Você está de recuperação! A nota foi ${notas}`
        resposta.style.color = `yellow`

    } else if (notas < 3.9) {
        resposta.innerText = `Reprovado!`
        resposta.style.color = `red`

    }

})
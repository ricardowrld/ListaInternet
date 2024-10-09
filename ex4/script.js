const frm = document.querySelector("form");
const saida = document.querySelector("h2");
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const idade = Number(frm.inIdade.value);

    if (idade >=  18) {
        saida.innerText = `Você é maior de Idade!`
        saida.style.color = `green`
    } else {
        saida.innerText = `Você é menor de Idade!`
        saida.style.color = `red`
    }

})
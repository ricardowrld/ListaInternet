const frm = document.querySelector("form");
const saida = document.querySelector("h2");
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = Number(frm.inNumero.value);
    if (valor % 2 == 0) {
        saida.innerText = `O número é par!`
        saida.style.color = `green`
    } else {
        saida.innerText = `O número é impar`
        saida.style.color = `red`
    }
})
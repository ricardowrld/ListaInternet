const frm = document.querySelector("form");
const saida = document.querySelector("h2");
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const peso = Number(frm.inPeso.value);
    const altura = Number(frm.inAltura.value);

    IMC = (peso / altura) ** 2

    if (IMC <= 18.5) {
        saida.innerText = `Baixo Peso`
    } else if (IMC >=18.6 && IMC <= 24.9) {
        saida.innerText = `Peso Normal`
    } else if (IMC >= 25 && IMC <= 29.9) {
        saida.innerText = `Sobrepeso`
    } else if (IMC >= 30 && IMC <= 34.9) {
        saida.innerText = `Obesidade grau 1`
    } else if (IMC >= 35 && IMC <= 39.9) {
        saida.innerText = `Obesidade grau 2`
    } else if (IMC >= 40) {
        saida.innerText = `Obesidade grau 3`
    }

})
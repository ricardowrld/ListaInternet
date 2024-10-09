const frm = document.querySelector("form");
const saida = document.querySelector("h2");
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const lado1 = Number(frm.inLado1.value);
    const lado2 = Number(frm.inLado2.value);
    const lado3 = Number(frm.inLado3.value);

    if ((lado1 + lado2) > lado3) {
        if (lado1 == lado2 && lado1 == lado3) {
            saida.innerText = `O triangulo é equilátero`
        } else if (lado1 == lado2 && lado1 != lado3 || lado1 == lado3 && lado1 != lado2 || lado2 == lado3 && lado2 != lado1) {
            saida.innerText = `O triangulo é isóceles`
        } else if (lado1 != lado2 && lado1 != lado3) {
            saida.innerText = `O triangulo é escaleno`
        }
    } else {
        saida.innerText = `O triangulo é inválido`
        saida.style.color = `red`
    }
})
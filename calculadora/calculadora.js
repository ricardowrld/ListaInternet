
function calcular() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    let resultado = 0;
    let operacaoSelecionada = false;

    if (document.getElementById('soma').checked) {
        resultado = numero1 + numero2;
        operacaoSelecionada = true;
    }
    if (document.getElementById('subtrair').checked) {
        resultado = numero1 - numero2;
        operacaoSelecionada = true;
    }
    if (document.getElementById('multiplicar').checked) {
        resultado = numero1 * numero2;
        operacaoSelecionada = true;
    }
    if (document.getElementById('dividir').checked) {
        resultado = numero1 / numero2;
        operacaoSelecionada = true;
    }
    if (document.getElementById('elevado').checked) {
        resultado = numero1 ** numero2;
        operacaoSelecionada = true;
    }
    if (document.getElementById('resto').checked) {
        resultado = numero1 % numero2;
        operacaoSelecionada = true;
    }
    if (document.getElementById('raiz').checked) {
        resultado = Math.pow(numero1,1 / numero2);
        operacaoSelecionada = true;
    }
    if (operacaoSelecionada != true) {
        resultado = 'Por favor, selecione uma operação!';
    }
    saida = document.getElementById("resultado").innerText = `${resultado}`
}

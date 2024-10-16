
var saida = document.getElementById("resultado");
var resultado = 0;

function calculartabu () {
    var num = Number(document.getElementById("numero").value);
    for (var i=1; i<=10; i++) {
        resultado = num * i;
        saida.innerText += "\n" + resultado;      
    }

}
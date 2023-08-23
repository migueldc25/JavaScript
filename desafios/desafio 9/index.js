document.getElementById("submeter").onclick = function(){
    let s = Number(document.getElementById("s").value);
    let p = Number(document.getElementById("p").value);
    let desconto = ((p * s) / 100);
    let resultado = s + desconto;
    document.getElementById("resultado").innerHTML = `O seu salário era de ${s}$, agora com o aumento de ${p}% passou a ser ${resultado}$`;
}
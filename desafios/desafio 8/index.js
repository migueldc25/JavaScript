document.getElementById("submeter").onclick = function(){
    let vp = document.getElementById("vp").value;
    let p = document.getElementById("p").value;
    let desconto = (p * vp) / 100;
    document.getElementById("resultado").innerHTML = `Calculando desconto de ${p}% ...`;
    document.getElementById("resultado").innerHTML = `O preço original era ${vp}$. <br> No fim você vai pagar ${vp - desconto.toFixed(2)}$ pelo produto`;
}
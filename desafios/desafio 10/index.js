document.getElementById("submeter").onclick = function(){
    let va = Number(document.getElementById("valora").value);
    let vb = Number(document.getElementById("valorb").value);
    let vc = Number(document.getElementById("valorc").value);
    let r = (vb * vb)-(4 * va * vc);
    document.getElementById("expressao").innerHTML = `A equação atual é ${va}x<sup>2</sup> + ${vb}x + ${vc} = 0`;
    document.getElementById("conta").innerHTML = `O cálculo realixado será &#916; = ${vb}<sup>2</sup> - 4.${va}.${vc}`;
    document.getElementById("resultado").innerHTML = `O valor calculado foi &#916; = ${r}`;
}
document.getElementById("submeter").onclick = function(){
    let vd = document.getElementById("vd").value;
    let ec = document.getElementById("ec").value;
    document.getElementById("resultado").innerHTML = `Você vai conseguir comprar ${ec * vd} dólares`;
}
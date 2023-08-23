document.getElementById("submeter").onclick = function(){
    let v = Number(document.getElementById("valor").value);
    document.getElementById("titulo").innerHTML = `A temperatura de ${v} graus, corresponde a... `;
    document.getElementById("k").innerHTML = `${v + 273} Kelvin`;
    document.getElementById("f").innerHTML = `${((v * 1.8) + 32).toFixed(2)} Fahrenheit`;
}
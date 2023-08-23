document.getElementById("submeter").onclick = function(){
    let d = Number(document.getElementById("valor").value);
    document.getElementById("conversor").innerHTML = `A distância de ${d} metros, corresponde a...`
    document.getElementById("km").innerHTML = `${d / 1000} quilômetros (km)`
    document.getElementById("hm").innerHTML = `${d / 100} quilômetros (Hm)`
    document.getElementById("dam").innerHTML = `${d / 10} quilômetros (Dam)`
    document.getElementById("dm").innerHTML = `${d * 10} quilômetros (dm)`
    document.getElementById("cm").innerHTML = `${d * 100} quilômetros (cm)`
    document.getElementById("mm").innerHTML = `${d * 1000} quilômetros (mm)`
}
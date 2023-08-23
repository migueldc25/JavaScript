document.getElementById("submeter").onclick = function(){
    let va = Number(document.getElementById("valoranterior").value);
    let vat = Number(document.getElementById("valoratual").value);
    document.getElementById("subtitulo").innerHTML = "Analisando os valores informados";
    document.getElementById("p1").innerHTML = `O produto custava ${va}$ e agora custa ${vat}$ .`;
    if(vat < va){
        let d = va - vat;
        document.getElementById("p2").innerHTML = "Hoje o produto está mais barato";
        document.getElementById("p3").innerHTML = `O preço caiu ${d}$ em relação ao preço anterior`;
        document.getElementById("p4").innerHTML = `Uma variação de ${(d * 100) / va .toFixed(2)}% para baixo`;
    }  
    else if(vat > va){
        let a = vat - va;
        document.getElementById("p2").innerHTML = "Hoje o produto está mais caro";
        document.getElementById("p3").innerHTML = `O preço subiu ${a}$ em relação ao anterior`;
        document.getElementById("p4").innerHTML = `Uma variação de ${(a * 100) / va .toFixed(2)}% para cima`;
    }
    else{
        document.getElementById("p2").innerHTML = "Hoje o produto tem o mesmo valor que antes";
    }
}
document.getElementById("submeter").onclick = function(){
    let ano = Number(document.getElementById("ano").value);
    document.getElementById("titulo").innerHTML = `Analisando o ano de ${ano} ...`;
    if(ano % 4 == 0){
        document.getElementById("resultado").innerHTML = `O ano de ${ano} é bissexto &#x2705;`;
    }
    else{
        document.getElementById("resultado").innerHTML = `O ano de ${ano} não é bissexto &#x274C`;
    }
}
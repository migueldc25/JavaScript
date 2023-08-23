document.getElementById("submeter").onclick = function(){
    let nome = document.getElementById("nomealuno").value;
    let pn = Number(document.getElementById("nota1").value);
    let sn = Number(document.getElementById("nota2").value);
    document.getElementById("subtitulo").innerHTML = `Analisando a situação de ${nome}`;
    let media = ((pn + sn) / 2).toFixed(2);
    document.getElementById("p1").innerHTML = `Com as notas ${pn.toFixed(2)} e ${sn.toFixed(2)}, a média é ${media}`;
    if(media > 6){
        document.getElementById("p2").innerHTML = `Com a média acima de 6,0 o aluno está APROVADO`;
    }
    else if(media < 3){
        document.getElementById("p2").innerHTML = `Com a média abaixo de 3,0 o aluno está REPROVADO`;
    }
    else{
        document.getElementById("p2").innerHTML = `Com a média entre 3,0 e 6,0 o aluno está em RECUPERAÇÃO`;
    }
}
function mostraAlerta()
{
    alert("bom dia");
}

window.onload=function(){
    let botaoAlerta = document.getElementById("alerta");

    botaoAlerta.onclick = function () {
        mostraAlerta() ;
    };
}

{/* <button id="alerta">Alerta</button> */}
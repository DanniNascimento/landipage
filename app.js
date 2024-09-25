var setaDireita = window.document.getElementById("seta-direita");
var setaEsquerda = window.document.getElementById("seta-esquerda");
var comentario1 = window.document.getElementById("comentario1");
var comentario2 = window.document.getElementById("comentario2");
var comentario3 = window.document.getElementById("comentario3");

function RolarParaDireita() {
    comentario1.style = "display:none";
    comentario3.style = "display:flex";
    setaDireita.style = "display:none";
    setaEsquerda.style = "display:flex; margin-top:40px";
    }

    function RolaParaEsquerda() {
        comentario1.style = "display:flex";
        comentario3.style = "display:none";
        setaDireita.style = "display:flex; margin-top:20px";
        setaEsquerda.style = "display:none";
}
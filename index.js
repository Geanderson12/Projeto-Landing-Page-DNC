card1 = document.getElementById("card1")
card2 = document.getElementById("card2")
card3 = document.getElementById("card3")
setaEsq = document.getElementById("setaEsq")
setaDir = document.getElementById("setaDir")

function rolarparadireita(){
    card2.style = "display:none";
    card3.style = "display:flex"
    card1.style = "display:flex";
    setaEsq.style = "display:flex";
    setaDir.style ="display:none";
}

function rolarparaesquerda(){
    card3.style = "display:none"
    card1.style = "display:flex";
    card2.style = "display:flex";
    setaEsq.style = "display:none";
    setaDir.style ="display:flex"; 
}  
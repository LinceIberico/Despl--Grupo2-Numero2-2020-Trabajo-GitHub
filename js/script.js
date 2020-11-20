
let oFlecha=document.getElementById("flecha");
//Posicionando la flecha
oFlecha.style.left=(window.innerWidth-2*oFlecha.offsetWidth)+"px";
oFlecha.style.top=(window.innerHeight-70)+"px";


let marcador=null;

function subir(){
  	window.scrollBy(0,-10);
      clearInterval(marcador);
    if(window.scrollY>1)
    hacerScroll();
}

function hacerScroll() {
    clearInterval(marcador);
    marcador=setInterval(subir,0);    
}



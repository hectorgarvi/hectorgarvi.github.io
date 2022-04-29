function cambiarLetra(parrafo){

    if(parrafo.style.color=="black"){
        parrafo.style.color="blue";
    } else {
        parrafo.style.color="black";

    }
}

function cambiarBoton(boton){
    if(boton.style.background=="grey"){
        boton.style.background="red";
    }else {
        boton.style.background="grey";
    }
}

function borrado(texto){
    alert('¡Dije que no podías borrar!');
}


function cambiarFondo(){
    if (document.getElementById("ejer4").style.backgroundColor!="red"){
        document.getElementById("ejer4").style.backgroundColor="red";
    }else {
    document.getElementById("ejer4").style.backgroundColor="orange";
    }
}

function cambiarColorFondo(){
   
    document.getElementById("ejer5").style.backgroundColor="aqua";
    
}

function ratonEncima(parrafo){
    parrafo.style.color="brown";
}

function ratonFuera(parrafo){
    parrafo.style.color="black";
}

function redimensionar(){
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Tamaño de la página: altura=" + w + ", anchura=" + h;
    document.getElementById("tamanyo").innerHTML = txt;
}

function carga(){
    alert('La página ha cargado correctamente');
}

function despedida(){
    alert('Gracias por visitarnos');
}
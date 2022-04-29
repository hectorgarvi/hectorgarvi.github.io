/*
MODO OSCURO
*/

function ChangeBack() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("switch").src="./moon.svg";

    if (element.classList != "dark-mode"){
        document.getElementById("switch").src="./sun.svg";
    }
}

// Bucle para mostrar los meses //
function Meses(){
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    for (i = 0; i < 12; ++i){
        document.write("Mes numero " + (i + 1) + ":&nbsp;"+ meses[i]);
        document.write("</br>");
    }
    /*
    diasSemana = (diasSemana += 3) % 7;    // Se usa para que al salir del rango/intervalo, continue ejecutandose sin problemas //
    */
}


/*
MODO OSCURO
*/

function ChangeBack() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementsByClassName("switch").src="./moon.svg";

    if (element.classList != "dark-mode"){
        document.getElementsByClassName("switch").src="./sun.svg";
        document.classList.toggle("light-mode");
    }
}

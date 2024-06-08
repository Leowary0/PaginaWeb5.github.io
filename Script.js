//Funcion de seleccionar el boton de menu 
function seleccionar(link){
    var opciones = document.querySelectorAll("#links a");
    ocipnes[1] .className = "";
    ocipnes[2] .className = "";
    ocipnes[3] .className = "";
    link.className = "seleccionado";

    //desaparece el menu en modo responsive 
    var x = document.getElementById("nav");
    x.className = "";
}
//funcion del menu responsive 
function responsiveMenu() {
    var x = document.getElementById("nav");
    if ( x.className === "") {
        x.className = "responsive";    
    } else {
    x.className = "";
    }
}
/***************** RECUPERANDO VALORES *******************/

const nombre = document.getElementById("nombreInput");
const apellido = document.getElementById("apellidoInput");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const cuerpoTabla = document.getElementById("cuerpoTabla");


/***************** DECLARANDO FUNCIONES *******************/

const agregarUsuario = (mensaje) => {
    
    if(document.getElementById("nombreInput").value==""){
        alert("Por favor ingrese el nombre, gracias.");
        //document.getElementById("mensaje").style.visibility=visible;
        document.getElementById("nombreInput").focus();
    } 
    
    else if(document.getElementById("apellidoInput").value==""){
        alert("Por favor ingrese el apellido, gracias.");
        document.getElementById("apellidoInput").focus();
    } else{
        alert("Ok");
    }
};


const limpiarDatos = () => {
    document.getElementById("nombreInput").focus();
};




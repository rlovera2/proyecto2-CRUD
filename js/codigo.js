/***************** RECUPERANDO VALORES *******************/

const nombre = document.getElementById("nombreInput");
const apellido = document.getElementById("apellidoInput");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const cuerpoTabla = document.getElementById("cuerpoTabla");
let contador = 1;



/***************** DECLARANDO FUNCIONES *******************/

const agregarUsuario = () => {

    if(document.getElementById("nombreInput").value==""){
       // alert("Por favor ingrese el nombre, gracias.");
        mensaje_nombre.style.display = "inline";
        document.getElementById("nombreInput").focus();
    } 
    
    else if(document.getElementById("nombreInput").value.length < 3 ){
      // alert("Por favor ingrese el nombre, gracias.");
       mensaje_nombre.style.display = "inline";
       document.getElementById("nombreInput").focus();
   } 
    else if(document.getElementById("apellidoInput").value==""){
        //alert("Por favor ingrese el apellido, gracias.");
        mensaje_nombre.style.display = "none";
        mensaje_apellido.style.display = "inline";
        document.getElementById("apellidoInput").focus();
    }
    else if(document.getElementById("apellidoInput").value.length < 3){
          //alert("Por favor ingrese el apellido, gracias.");
          mensaje_nombre.style.display = "none";
          mensaje_apellido.style.display = "inline";
          document.getElementById("apellidoInput").focus();     
    } else{
        mensaje_nombre.style.display = "none";
        mensaje_apellido.style.display = "none";
        contador = contador + 1;
        const usuario = {
          id: crypto.randomUUID(),
          //id: JSON.stringify(contador),
          nombre: nombre.value,
          apellido: apellido.value,
        };
      
        usuarios.push(usuario);
      
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        mostrarUsuarios();
        limpiarDatos();
        
        alert("Los datos se ingresaron correctamente.");
    }
  
};

const textoInput = () => {
    
    let x=document.getElementById("nombreInput").value.length;
    let cadena="";
    caracteres=["0","1","2","3","4","5","6","7","8","9","@",".","/"];
    
    cadena=document.getElementById("nombreInput").value.replace(/[0-9]+/g, "");
   // alert(cadena);

    for (let i = 0; i <= x; i++) {
      for (let y = 0; y <= 13; y++) {

        alert(cadena.valueOf.trim().charAt(i));
          if(cadena.valueOf.trim().charAt(i) == caracteres[y]){
            alert(cadena.valueOf.trim().charAt(i));
          }
      
      }
    
  }
   document.getElementById("nombreInput").value = cadena;
  
};


const editarUsuario = (id,nombre,apellido) => {
    limpiarDatos();
    btnAgregar.style.display = "none";
    btnActualizar.style.display = "inline";
    document.getElementById("idInput").value = id;
    document.getElementById("nombreInput").value = nombre;
    document.getElementById("apellidoInput").value = apellido;
    document.getElementById("nombreInput").focus();
};


const actualizarUsuario = () => {

  if(document.getElementById("nombreInput").value==""){
    // alert("Por favor ingrese el nombre, gracias.");
     mensaje_nombre.style.display = "inline";
     document.getElementById("nombreInput").focus();
 } 
 
 else if(document.getElementById("nombreInput").value.length < 3 ){
   // alert("Por favor ingrese el nombre, gracias.");
    mensaje_nombre.style.display = "inline";
    document.getElementById("nombreInput").focus();
} 
 else if(document.getElementById("apellidoInput").value==""){
     //alert("Por favor ingrese el apellido, gracias.");
     mensaje_nombre.style.display = "none";
     mensaje_apellido.style.display = "inline";
     document.getElementById("apellidoInput").focus();
 }
 else if(document.getElementById("apellidoInput").value.length < 3){
       //alert("Por favor ingrese el apellido, gracias.");
       mensaje_nombre.style.display = "none";
       mensaje_apellido.style.display = "inline";
       document.getElementById("apellidoInput").focus();     
 } else{
     mensaje_nombre.style.display = "none";
     mensaje_apellido.style.display = "none";

  const usuario = usuarios.find((usuario) => usuario.id === idInput.value)
  usuario.nombre = nombre.value;
  usuario.apellido = apellido.value;
  localStorage.setItem("usuarios", JSON.stringify(usuarios))

  btnAgregar.style.display = "inline";
  btnActualizar.style.display = "none";

  idInput.value = "";
  nombre.value = "";
  apellido.value = "";

  mostrarUsuarios();
 } 
}

const eliminarUsuario = (id) =>{
  const usuario = usuarios.find((usuario) => usuario.id === id)
  const index = usuarios.indexOf(usuario)
  usuarios.splice(index, 1)
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarUsuarios();
};

const limpiarDatos = () => {
    document.getElementById("nombreInput").value = "";
    document.getElementById("apellidoInput").value = "";
    document.getElementById("nombreInput").focus();
    x = 0;
    mensaje_nombre.style.display = "none";
    mensaje_apellido.style.display = "none";
};

const cambiar_color_over = (fila) => {
  //alert(fila);
   //fila.style.backgroundColor ="Pink"; 
   document.getElementById("registro").style.backgroundColor ="Pink";
   
   //fila.bgColor ="Pink";
   fila.style.cursor="hand";
};


const cambiar_color_out = (fila) => {
  fila.style.backgroundColor ="rgb(226, 234, 255)"; 

};

const mostrarUsuarios = () => {
  cuerpoTabla.innerHTML = "";
  usuarios.forEach((usuario) => {
    cuerpoTabla.innerHTML += `<tr id="registro">
        <th scope="row" class="registros" onmouseover="cambiar_color_over('registro')"  onmouseout="cambiar_color_out('registro')">
        <a href="#" 
        onclick="editarUsuario('${usuario.id}','${usuario.nombre.toUpperCase()}','${usuario.apellido.toUpperCase()}')"
         >
        ${usuario.id}</a></th>

        <td class="registros">${usuario.nombre.toUpperCase()}</td>
        <td class="registros">${usuario.apellido.toUpperCase()}</td>
        <td class="registros">
        <button
          type="button"
          class="botones"
          onclick="editarUsuario('${usuario.id}','${usuario.nombre.toUpperCase()}','${usuario.apellido.toUpperCase()}')"
        >
          Editar
        </button>
        <button
          type="button"
          class="botones"
          onclick="eliminarUsuario('${usuario.id}')"
        >
          Eliminar
        </button></td>
    </tr>`;
  });
};



window.addEventListener("load", mostrarUsuarios);
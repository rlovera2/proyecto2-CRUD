/***************** RECUPERANDO VALORES *******************/

const nombre = document.getElementById("nombreInput");
const apellido = document.getElementById("apellidoInput");
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const cuerpoTabla = document.getElementById("cuerpoTabla");
let contador = 0;


/***************** DECLARANDO FUNCIONES *******************/

const agregarUsuario = () => {

    if(document.getElementById("nombreInput").value==""){
        alert("Por favor ingrese el nombre, gracias.");
        //document.getElementById("mensaje").style.visibility=visible;
        document.getElementById("nombreInput").focus();
    } 
    
    else if(document.getElementById("apellidoInput").value==""){
        alert("Por favor ingrese el apellido, gracias.");
        document.getElementById("apellidoInput").focus();
    } else{

        const usuario = {
          id: crypto.randomUUID(),
          nombre: nombre.value,
          apellido: apellido.value,
        };
      
        usuarios.push(usuario);
      
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        mostrarUsuarios();
        limpiarDatos();
    }
};


const limpiarDatos = () => {
    document.getElementById("nombreInput").value = "";
    document.getElementById("apellidoInput").value = "";
    document.getElementById("nombreInput").focus();
};


const mostrarUsuarios = () => {
    cuerpoTabla.innerHTML = "";
    usuarios.forEach((usuario) => {
      cuerpoTabla.innerHTML += `<tr>
          <th scope="row">${usuario.id}</th>
          <td>${usuario.nombre}</td>
          <td>${usuario.apellido}</td>
          <td>
          <button
            type="button"
            class="btn btn-danger"
            onclick="actualizarUsario('${usuario.id}')"
          >
            Actualizar
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onclick="eliminarUsario('${usuario.id}')"
          >
            Eliminar
          </button><td>
      </tr>`;
    });
  };
  

const eliminarUsuario = (id) =>{
  localStorage.removeItem(id);
}
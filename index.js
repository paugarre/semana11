const URL = "https://jsonplaceholder.typicode.com/users";
const botonEnviar = document.getElementById('envio');
const formCompleto = document.getElementById('formulario');


botonEnviar.addEventListener('click', function(){
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const nacimiento = document.getElementById('nacimiento').value;

    let info = {
        nombre: nombre,
        apellido: apellido,
        nacimiento: nacimiento,
    }

    fetch(URL, {
        method: "POST",
        body: JSON.stringify(info),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(Response => Response.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error))
})

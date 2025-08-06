// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();

    if (amigo === "") {
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }
    if (listaAmigos.includes(amigo)) {
        alert(`El amigo "${amigo}" ya ha sido agregado.`);
        return;
    }
    listaAmigos.push(amigo);
    document.getElementById("amigo").value = '';
    mostrarLista(); 
}
// Función para mostrar la lista de amigos en el HTML
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        let amigo = document.createElement("li");
        amigo.textContent = listaAmigos[i];
        lista.appendChild(amigo);
    }
}
// Funcion pra sortear un amigo de la lista
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let indice = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indice];
    alert(`El amigo sorteado es: ${amigoSorteado}`);
}
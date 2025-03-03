let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const lista = document.getElementById("listaAmigos");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Favor de ingresar un nombre.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("El nombre ya ha sido ingresado, favor de seleccionar otro.");
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombre);

  // Crear y agregar el nombre a la lista visual
  const li = document.createElement("li");
  li.textContent = nombre;
  lista.appendChild(li);

  // Limpiar el input
  input.value = "";
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    resultado.innerHTML = "<li>No hay amigos en la lista.</li>";
    return;
  }

  // Generar índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en la lista
  const li = document.createElement("li");
  li.textContent = `🎉 ${amigoSorteado} es el amigo secreto 🎉`;
  resultado.appendChild(li);

  // Eliminar el resultado después de 3 segundos
  setTimeout(() => {
    resultado.innerHTML = "";
  }, 3000);
}

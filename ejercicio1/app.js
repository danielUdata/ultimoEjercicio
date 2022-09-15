const form = document.getElementById("inputs");
const nombres = form.elements["nombre"];
const cantidades = form.elements["Cantidad"];
const resp = document.getElementById("respuesta");
document.body.append(resp);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let pelicula = nombres.value;
  let precio = cantidades.value;

  if (precio !== "" && pelicula !== "") {
    if (precio > 5) {
      console.log("hola");
      const totalAntes = precio * 10000;
      const total = totalAntes - (totalAntes * 5) / 100;
      resp.innerHTML = `el nombre de la pelicula es ${pelicula} y el precio es ${total} `;
    } else {
      const total = precio * 10000;

      resp.innerHTML = `el nombre de la pelicula es ${pelicula} y el precio es ${total} `;
    }
  } else {
    alert("por favor digita los campos");
  }
});

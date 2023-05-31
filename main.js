//variables
let contador = 0;
console.log(contador);

const saludo = "Hello Word!!";
console.log(saludo);

//array
const frutas = ["🍊", "🍐", "🍇"];
console.log(frutas[1]);

//objetros
const animal = {
  color: "azul",
  nombre: "bluuweb",
  trabajando: "true",
};
console.log(animal.color);
console.log(animal.nombre);
console.log(animal["trabajando"]);

console.table(animal);

const todos = {
  "12233-iuyyy": {
    titulo: "todo #1",
    completado: false,
  },

  "098787-kjhu": {
    titulo: "todo #2",
    completado: true,
  },
};

console.log(todos["12233-iuyyy"].titulo);

//desestructurar

const { color, nombre } = animal;

console.log(nombre);

const [naranja, pera, uva] = frutas;

console.log(uva, pera, naranja);

//interpolación
const app = document.getElementById("app");

//  fetch("data.json")
//   .then((resp) => resp.json())
//   .then((data) => {
//     data.forEach((item) => {
//     app.innerHTML += Card(item)

//     console.log(item)
//   })})
//   .catch((Error) => console.log(Error,message))
 
const getGame = async() => {

  try {
    const res = await fetch("data.json");
    if (!res.ok) {
      throw{ok: false, msg: "Error 404"}
    }
    const data = await res.json();
    data.forEach(element => {
      app.innerHTML += Card(element)
    });

  } catch (error) {
    console.log(error)
  } finally{
    spinner.inneerHTML = "";
  }
  
}
getGame();

function Card({ name, year, genero, stock, img }) {
  
  const btnClass = (stock) => (stock > 0 ? "btn-primary" : "btn-danger disabled" )

  return `
  <div class="row d-flex flex-row border-primary"> 
  <div class="card my-4 mx-3 col-12 col-md-4" style="width: 18rem;">
      <img src=${img} class="card-img-top" alt="img" style="width: 17rem;">
        <div class="card-body">
          <h5 class="card-title">${name.toUpperCase()}</h5>
          <p class="card-text">${year} - ${genero}</p>
          <a href="#" class="btn  mb-1 ${btnClass(stock)}">Go somewhere</a>
        </div>
  </div>
  </div>
  `;
}

//  app.innerHTML = Card(one);
//  app.innerHTML += Card(two);
//  app.innerHTML += Card(three);

// uso del this

const persona = {
  nombre: "bluuweb",
  saludar: function () {
    setTimeout(() => {
      console.log("Hola, mi nombre es " + this.nombre);
    }, 1000);
  },
};

persona.saludar();
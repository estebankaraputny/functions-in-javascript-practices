// Funcion sumar 

console.log("SUMA");
function suma (num1, num2){
    let resultado = num1 + num2;
    console.log(`El resultado de la suma es ${resultado}`);
}
suma(8, 12)
suma(25, 55)
suma(100, 10)

// Funcion restar 

console.log("\n\nRESTA");

function resta (num3, num4){
    let resultado2 = num3 - num4;
    console.log(`EL resultado de la resta es de ${resultado2}`);
}

resta(12, 1)
resta(188, 8)
resta(1000, 1)


//Funcion multiplicar

console.log("\n\nMULTIPLICACIÓN");

function multi (num5, num6){
    let resultado3 = num5 * num6;
    console.log(`EL resultado de la multiplicación es de ${resultado3}`);
}

multi(4, 4)
multi(8, 2)
multi(100, 10)


//Funcion división 

console.log("\n\nDIVISIÓN");

function division (num7, num8){
    let resultado4 = num7 / num8;
    console.log(`El resultado de la división es de ${resultado4}`);
}
division(1223,122)
division(32423, 33)
division(2367, 667)

//Punto 5 Array Frutas 
console.log("\n\nLISTA DE FRUTAS");
const arrayFrutas = ["Melón", "Manzana", "Pera", "Banana", "Frutilla"];

arrayFrutas.forEach(element => console.log(element));

//el metodo forEach ejecuta la función indicada una vez por cada elemento del array.


// Punto 6 Array Animales
console.log("\n\nLISTA DE ANIMALES");
const arrayAnimales = ["Perro", "Gato", "Tortuga", "Cabra", "Cerdo", "Gallina", "Pato", "Serpiente", "Jabali", "Conejo"];
arrayAnimales.forEach(element => console.log(element));


//Punto 7 Funcion suma, resta, multiplicacion, division.

console.log("\n\nRESULTADOS")

const calculator = (option, a, b) => {
  if (option === 1){
    suma (a, b);
  } else if (option === 2 ){
    resta (a, b);
  } else if (option === 3){
    multi(a, b);
  } else if( option === 4){
    division(a, b);
  } else{
    console.log("Opcion incorrecta, Eliga una de estas opciones:\n1-Suma\n2-Resta\n3-Multiplicación\n4-División")
  }
}

calculator(1, 324, 34);
calculator(2, 234, 67);
calculator(3, 765, 2);
calculator(4, 234, 6);
calculator(5, 354,45)


// Punto 8 Funcion 

const jsonPlaceholder = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984",
        },
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677",
        },
      },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889",
        },
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  ];
//   console.log(jsonPlaceholder);
  

//  Punto 8
console.log("\n\nNOMBRE DE USUARIO Y CORREO")
 function arrayUser (){
    console.log(`El nombre de usuario es ${jsonPlaceholder[0].username} y su correo es ${jsonPlaceholder[0].email}`)
 }
 arrayUser()


//  Punto 9 
console.log("\n\nORDEN DE UN ARRAY")

function organizeArray (){
  console.log(newArrayNumbers.sort());
}
function orderSmToLg(arrayNumbersTwo){
  arrayNumbersTwo.sort(function(a, b){
    return a - b
  });
  console.log(arrayNumbersTwo);
}

function orderLgToSm(arrayNumbersTwo){
  arrayNumbersTwo.reverse(function(a, b){
    return a - b
  });
  console.log(arrayNumbersTwo);
}

let arrayOfNumbers = [];
for (let i = 0; i <= 5; i++){
  let numbersArray = parseInt(prompt("Por favor, Ingrese un numero"));
  arrayOfNumbers.push(numbersArray);
}
console.log("Tus numeros");
console.log(arrayOfNumbers);
console.log("\n\nTus numeros ordenados de menor a mayor");
orderSmToLg(arrayOfNumbers);
console.log("\n\nTus numeros ordenados de mayor a menor");
orderLgToSm(arrayOfNumbers);


// Punto 10
//Buscar información sobre los eventos en el DOM

//Punto 11
console.log("\n\nTEXTO A MINUSCULAS")
function cambiar(){
    let saludo= prompt(`Introduzca un texto`)
    console.log(`El texto en minusculas ${saludo.toLowerCase()}`)
}
cambiar()


// Punto 12

// Definir una función llamada a_pagar que reciba 4 números: la cantidad de personas,
// el monto gastado en bebida, el monto gastado en comida y el del alquiler del lugar, y
// retorne cuánto le toca pagar a cada uno.


const aPagar = (personas, bebidas, comida, alquiler) =>{
  let total= bebidas + comida + alquiler;
  let porPersona = total / personas;
  console.log(`El total a pagar es de $${total}, por persona debe colaborar con $${porPersona}`)
  return porPersona
}
aPagar(4, 3500, 10000, 5000);


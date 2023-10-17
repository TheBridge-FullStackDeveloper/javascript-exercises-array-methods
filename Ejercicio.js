// =============================================================================
// 1. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean mayor que 18
// =============================================================================
function getAdultsArray(ages) {
  // Aquí tu código
const filterages=ages.filter(element=>element>18)
return filterages;

}

// =============================================================================
// 2. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean par
// =============================================================================
function getEvenArray(numbers) {
  // Aquí tu código
  const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0; 
  });
  return evenNumbers;
}

// =============================================================================
// 3. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of legends'
// El objeto streamer tiene la siguiente forma
// { name: 'Nombre', gameMorePlayed: 'League of legends' }
// =============================================================================
function getStreamersLOL(streamers) {
  return streamers.filter(streamer => streamer.gameMorePlayed === 'League of legends');
}

let streamers = [
  { name: 'Streamer1', gameMorePlayed: 'League of legends' },
  { name: 'Streamer2', gameMorePlayed: 'Minecraft' },
];

let lolStreamers = getStreamersLOL(streamers);

console.log(lolStreamers);


// =============================================================================
// 4. Dado el siguiente array, usa .map() para generar un nuevo array con
// cada uno de los valores aumentados en 10.
// =============================================================================
function getIncreasedArray(numbers) {
  // Aquí tu código

 
    return numbers.map(number => number + 10);


}

// =============================================================================
// 5. Dado el siguiente array, usa .map() para generar un nuevo array si hay números 
// negativos se conviertan a positivos y si son positivos se conviertan a negativos.


function getInvertedSignArray(numbers) {
  // Aquí tu código
  
    return numbers.map(number => -number);
}


let numbersArray3 = [1, -2, 3, -4, 5];
let invertedSignArray = getInvertedSignArray(numbersArray3);
console.log(invertedSignArray);  // [-1, 2, -3, 4, -5]






// =============================================================================
// 6. Dado el siguiente array, usa .reduce() para calcular la suma de todos
// los valores del array.
// =============================================================================

  function getSum(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

let numbersArray2 = [1, 2, 3, 4, 5];
let sum = getSum(numbersArray2);
console.log(sum);  // 15



// =============================================================================
// 7. Dado el siguiente array, usa .reduce() para calcular la media de todos
// los valores del array.
// ej. numbers = [1, 2, 3, 4, 5]
// =============================================================================


function getAverage(numbers) {
  let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum / numbers.length;
}


let numbersArray = [1, 2, 3, 4, 5];
let average = getAverage(numbersArray);
console.log(average);  


// =============================================================================
// 8. Dado el siguiente array, usa .reduce() para conseguir devolver un
// objeto con el número de veces que se repite cada string.
// =============================================================================
function getRepetitions(array) {
  return array.reduce((accumulator, currentValue) => {
      accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
      return accumulator;
  }, {});
}


let stringArray = ['a', 'b', 'a', 'c', 'b', 'a', 'd', 'd'];
let repetitions = getRepetitions(stringArray);
console.log(repetitions);  


// =============================================================================
// 9. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero }
// =============================================================================
function getSumAges(people) {
  return people.reduce((accumulator, person) => accumulator + person.age, 0);
}


let peopleArray1 = [
{ name: 'Alicia', age: 25 },
{ name: 'Luis', age: 30 },
{ name: 'Carlos', age: 35 },
];

let totalAge = getSumAges(peopleArray1);
console.log(totalAge);  

// =============================================================================
// 10. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas que tienen perro.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero, hasDog: boolean }
// =============================================================================
function getSumDogAges(people) {
  return people.reduce((accumulator, person) => {
      if (person.hasDog) {
          return accumulator + person.age;
      } else {
          return accumulator;
      }
  }, 0);
}


let peopleArray = [
{ name: 'maria', age: 25, hasDog: true },
{ name: 'pepe', age: 30, hasDog: false },
{ name: 'manu', age: 35, hasDog: true },
];

let totalDogOwnersAge = getSumDogAges(peopleArray);
console.log(totalDogOwnersAge);  


// =============================================================================
// 11. Dado el siguiente array, usa .find() para encontrar el número 100.
// =============================================================================
function find100(numbers) {
  return numbers.find(number => number === 100);
}

let numbersArray1 = [1, 50, 100, 150, 200];
let foundNumber = find100(numbersArray1);
console.log(foundNumber);  

// =============================================================================
// 12. Dado el siguiente array, usa .sort() para ordenar los números de menor
// a mayor.
// =============================================================================
function sortFromMinToMax(numbers) {
  // Aquí tu código
  return numbers.sort((a, b) => a - b);
}

let ordenados=[5,4,3,2,1];

console.log(sortFromMinToMax(ordenados));


// =============================================================================
// 13. Dado el siguiente array, usa .some() para saber si hay algún número
// par.
// =============================================================================

function thereAreEven(numbers) {
  return numbers.some(element => element % 2 === 0);
}

const pares = [1, 2, 3, 4, 5];
console.log(thereAreEven(pares));



// =============================================================================
// 14. Dado el siguiente array, usa .every() para saber si todas las películas
// son del año 2018.
// El objecto pelicula tiene la siguiente forma
// { title: 'título', year: 2018 }
// =============================================================================


function areAllFilms2018(films) {
  // Aquí tu código
  return films.every(film => film.year === 2018);

}
const pelis = [
  { title: 'peli 1', year: 2018 },
  { title: 'peli 2', year: 2028 },
  { title: 'peli 3', year: 2038 }
];

console.log(areAllFilms2018(pelis)); 




// =============================================================================
// 15. Dado el siguiente array, usa .join() para concatenar todos los
// nombres en una coma.
// =============================================================================
function joinNames(names) {
  // Aquí tu código
  return names.join(', ');
}
const Lista = ['maria', 'luis', 'alex'];
console.log(joinNames(Lista));  



// =============================================================================
// 16. Dado el siguiente array, usa .includes() para saber si 'Perro' está
// incluido en el array.
// =============================================================================
function thereIsADog(animals) {
  // Aquí tu código
  return animals.includes("Perro");

}
let animales=["gato","Perro","canario"];

console.log(thereIsADog(animales));


// =============================================================================
// 17. Dado el siguiente array, usa .reverse() para darle la vuelta a los
// elementos del array.
// =============================================================================
function reverseNumbers(numbers) {
  // Aquí tu código
 return numbers.reverse()

}

let vuelta=[1,3,5,7];

console.log(reverseNumbers(vuelta));

// =============================================================================
// 18. Dado el siguiente array, usa .from() para convertirlo en un array.
// =============================================================================
function fromStringToArray(string) {
  // Aquí tu código

  return Array1.from(string);
}
const String1 = "hola";
console.log(fromStringToArray(String1));  

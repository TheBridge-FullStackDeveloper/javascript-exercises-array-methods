// =============================================================================
// 1. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean mayor que 18
// =============================================================================
function getAdultsArray(ages) {
  const adultAges = ages.filter(age => age > 18);
  return adultAges;
}

// =============================================================================
// 2. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean par
// =============================================================================
function getEvenArray(numbers) {
  const parNumbers = numbers.filter(numbers => numbers % 2 === 0);
  return parNumbers;
}

// =============================================================================
// 3. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of legends'
// El objeto streamer tiene la siguiente forma
// { name: 'Nombre', gameMorePlayed: 'League of legends' }
// =============================================================================
function getStreamersLOL(streamers) {
  const moreHours = streamers.filter(streamers => streamers.gameMorePlayed === 'League of legends');
  return moreHours;
}

// =============================================================================
// 4. Dado el siguiente array, usa .map() para generar un nuevo array con
// cada uno de los valores aumentados en 10.
// =============================================================================
function getIncreasedArray(numbers) {
  const nuevoArray = numbers.map(function (elemento) {
    return elemento + 10;
  });
  return nuevoArray;
}

// =============================================================================
// 5. Dado el siguiente array, usa .map() para generar un nuevo array si hay números 
// negativos se conviertan a positivos y si son positivos se conviertan a negativos.
function getInvertedSignArray(numbers) {
  const invertedArray = numbers.map(number => {
    if (number < 0) {
      return -number;
    } else if (number > 0) {
      return -number;
    } else {
      return 0;
    }
  });

  return invertedArray;
}

// =============================================================================
// 6. Dado el siguiente array, usa .reduce() para calcular la suma de todos
// los valores del array.
// =============================================================================
function getSum(numbers) {
  const result = numbers.reduce((acumulador, elemento) => acumulador + elemento, 0);
  return result;
}

// =============================================================================
// 7. Dado el siguiente array, usa .reduce() para calcular la media de todos
// los valores del array.
// ej. numbers = [1, 2, 3, 4, 5]
// =============================================================================
function getAverage(numbers) {
  const result = numbers.reduce((acumulador, elemento) => acumulador + elemento, 0) / numbers.length;
  return result;
}

// =============================================================================
// 8. Dado el siguiente array, usa .reduce() para conseguir devolver un
// objeto con el número de veces que se repite cada string.
// =============================================================================
function getRepetitions(array) {
  return array.reduce((acc, curr) => {
if(acc[curr]) {
  acc[curr]++
} else {
  acc [curr] = 1
}
return acc;
 },{})
}

// =============================================================================
// 9. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero }
// =============================================================================
function getSumAges(people) {
    const sumAges = people.reduce((total, person) => total + person.age, 0);
    return sumAges;
  }

// =============================================================================
// 10. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas que tienen perro.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero, hasDog: boolean }
// =============================================================================
function getSumDogAges(people) {
  const sumDogAges = people.reduce((total, person) => {
    if (person.hasDog) {
      return total + person.age;
    }
    return total;
  }, 0);

  return sumDogAges;
}

// =============================================================================
// 11. Dado el siguiente array, usa .find() para encontrar el número 100.
// =============================================================================
function find100(numbers) {
  const elementFounded = numbers.find(elemento => elemento === 100);
  return elementFounded;
}

// =============================================================================
// 12. Dado el siguiente array, usa .sort() para ordenar los números de menor
// a mayor.
// =============================================================================
function sortFromMinToMax(numbers) {
  const sortedNumbers = [...numbers];
  sortedNumbers.sort((a, b) => a - b);
  return sortedNumbers;
}

// =============================================================================
// 13. Dado el siguiente array, usa .some() para saber si hay algún número
// par.
// =============================================================================
function thereAreEven(numbers) {
  const result = numbers.some(elemento => elemento % 2 ===0);
  return result;
}

// =============================================================================
// 14. Dado el siguiente array, usa .every() para saber si todas las películas
// son del año 2018.
// El objecto pelicula tiene la siguiente forma
// { title: 'título', year: 2018 }
// =============================================================================
function areAllFilms2018(films) {
  const result = films.every(elemento => elemento === 2018);
  return result;
}

// =============================================================================
// 15. Dado el siguiente array, usa .join() para concatenar todos los
// nombres en una coma.
// =============================================================================
function joinNames(names) {
  const string = names.join(', ');
  return string;
}

// =============================================================================
// 16. Dado el siguiente array, usa .includes() para saber si 'Perro' está
// incluido en el array.
// =============================================================================
function thereIsADog(animals) {
  const elementExist = animals.includes('Perro');
  return elementExist;
}

// =============================================================================
// 17. Dado el siguiente array, usa .reverse() para darle la vuelta a los
// elementos del array.
// =============================================================================
function reverseNumbers(numbers) {
numbers.reverse();
return numbers;
}

// =============================================================================
// 18. Dado el siguiente array, usa .from() para convertirlo en un array.
// =============================================================================
function fromStringToArray(string) {
  const convertirArray = Array.from(string);
  return convertirArray;
}

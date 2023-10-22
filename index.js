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
    const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
    return evenNumbers;
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
  const arrayTimesTen = numbers.map(numbers => numbers + 10);
  console.log(arrayTimesTen);
  return arrayTimesTen
}

// =============================================================================
// 5. Dado el siguiente array, usa .map() para generar un nuevo array si hay números 
// negativos se conviertan a positivos y si son positivos se conviertan a negativos.
function getInvertedSignArray(numbers) {
  const negative = numbers.map(numbers => numbers * -1);
  return negative
}

// =============================================================================
// 6. Dado el siguiente array, usa .reduce() para calcular la suma de todos
// los valores del array.
// =============================================================================
function getSum(numbers) {
  const suma= numbers.reduce((acumulador, elemento) => acumulador + elemento, 0 )
  return suma
}

// =============================================================================
// 7. Dado el siguiente array, usa .reduce() para calcular la media de todos
// los valores del array.
// ej. numbers = [1, 2, 3, 4, 5]
// =============================================================================
function getAverage(numbers) {
  const average = numbers.reduce((acumulador, elemento) => acumulador + elemento,0) /numbers.length;
  return average
}

// =============================================================================
// 8. Dado el siguiente array, usa .reduce() para conseguir devolver un
// objeto con el número de veces que se repite cada string.
// =============================================================================
function getRepetitions(array) {
  return array.reduce((acumulador, elemento) => {
      if (acumulador[elemento]) {
          acumulador[elemento]++;
      } else {
          acumulador[elemento] = 1;
      }
      return acumulador;
  }, {});
}


// =============================================================================
// 9. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero }
// =============================================================================
function getSumAges(people) {
  const sum = people.reduce((acumulador, elemento) => acumulador + elemento['age'],0)
  return sum
}

// =============================================================================
// 10. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas que tienen perro.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero, hasDog: boolean }
// =============================================================================
function getSumDogAges(people) {
  const sumDogAges = people.reduce((acc, index) => {
    if (index.hasDog === true) {
      return acc + index.age;
    } else {
      return acc;
    }
  }, 0);

  return sumDogAges;
}

// =============================================================================
// 11. Dado el siguiente array, usa .find() para encontrar el número 100.
// =============================================================================
function find100(numbers) {
  const elementFound = numbers.find(elemento => elemento === 100);
  return elementFound
}

// =============================================================================
// 12. Dado el siguiente array, usa .sort() para ordenar los números de menor
// a mayor.
// =============================================================================
function sortFromMinToMax(numbers) {
  const numbersArr = [...numbers]
  const numbersSorted = numbersArr.sort((a,b)=> a-b);
  return numbersSorted
}

// =============================================================================
// 13. Dado el siguiente array, usa .some() para saber si hay algún número
// par.
// =============================================================================
function thereAreEven(numbers) {
  const evenNum = numbers.some(elemento => elemento % 2 === 0 );
  return evenNum
}

// =============================================================================
// 14. Dado el siguiente array, usa .every() para saber si todas las películas
// son del año 2018.
// El objecto pelicula tiene la siguiente forma
// { title: 'título', year: 2018 }
// =============================================================================
function areAllFilms2018(films) {
  const filmYear = films.every(el => el.year === 2018);
  return filmYear
}

// =============================================================================
// 15. Dado el siguiente array, usa .join() para concatenar todos los
// nombres en una coma.
// =============================================================================
function joinNames(names) {
  const jointNames = names.join(", ");
  return jointNames
}

// =============================================================================
// 16. Dado el siguiente array, usa .includes() para saber si 'Perro' está
// incluido en el array.
// =============================================================================
function thereIsADog(animals) {
  const elementExist = animals.includes('Perro');
  return elementExist
}

// =============================================================================
// 17. Dado el siguiente array, usa .reverse() para darle la vuelta a los
// elementos del array.
// =============================================================================
function reverseNumbers(numbers) {
  const reverse = numbers.reverse();
  return reverse
  }

// =============================================================================
// 18. Dado el siguiente array, usa .from() para convertirlo en un array.
// =============================================================================
function fromStringToArray(string) {
  const strToArr = Array.from(string);
  return strToArr
}

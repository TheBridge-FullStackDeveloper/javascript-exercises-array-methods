// =============================================================================
// 1. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean mayor que 18
// =============================================================================
function getAdultsArray(ages) {
  const getAdultsArrayFiltered = ages.filter((e) => e > 18);
  return getAdultsArrayFiltered;
}

// =============================================================================
// 2. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean par
// =============================================================================
function getEvenArray(numbers) {
  const getEvenArray = numbers.filter(function (e) {
    return e % 2 === 0;
  });
  return getEvenArray;
}

// =============================================================================
// 3. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of legends'
// El objeto streamer tiene la siguiente forma
// { name: 'Nombre', gameMorePlayed: 'League of legends' }
// =============================================================================
function getStreamersLOL(streamers) {
  const getStreamersLOL = streamers.filter(
    (streamers) => streamers.gameMorePlayed == "League of legends"
  );
  return getStreamersLOL;
}

// =============================================================================
// 4. Dado el siguiente array, usa .map() para generar un nuevo array con
// cada uno de los valores aumentados en 10.
// =============================================================================
function getIncreasedArray(numbers) {
  const getIncreasedArray = numbers.map(function (e) {
    return e + 10;
  });
  return getIncreasedArray;
}

// =============================================================================
// 5. Dado el siguiente array, usa .map() para generar un nuevo array si hay números
// negativos se conviertan a positivos y si son positivos se conviertan a negativos.
function getInvertedSignArray(numbers) {
  const getInvertedSignArray = numbers.map(function (number) {
    if (number < 0) {
      return number * -1;
    } else if (number > 0) {
      return number / -1;
    }
  });
  return getInvertedSignArray;
}

// =============================================================================
// 6. Dado el siguiente array, usa .reduce() para calcular la suma de todos
// los valores del array.
// =============================================================================
function getSum(numbers) {
  const getSum = numbers.reduce((acc, e) => acc + e, 0);
  return getSum;
}

// =============================================================================
// 7. Dado el siguiente array, usa .reduce() para calcular la media de todos
// los valores del array.
// ej. numbers = [1, 2, 3, 4, 5]
// =============================================================================
function getAverage(numbers) {
  const getSum = numbers.reduce((acc, e) => acc + e, 0);
  return getSum / numbers.length;
}

// =============================================================================
// 8. Dado el siguiente array, usa .reduce() para conseguir devolver un
// objeto con el número de veces que se repite cada string.
// =============================================================================
function getRepetitions(array) {
  const getRepetitions = array.reduce(
    (acc, e) => ((acc[e] = acc[e] + 1 || 1), acc),
    {}
  );
  return getRepetitions;
}

// =============================================================================
// 9. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero }
// =============================================================================
function getSumAges(people) {
  const getSumAges = people.reduce((acc, item) => acc + item.age, 0);
  return getSumAges;
}

// =============================================================================
// 10. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas que tienen perro.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero, hasDog: boolean }
// =============================================================================
function getSumDogAges(people) {
  const getSumDogAges = people.reduce(function (acc, item) {
    if (item.hasDog == true) {
      return acc + item.age;
    } else {
      return acc;
    }
  }, 0);
  return getSumDogAges;
}

// =============================================================================
// 11. Dado el siguiente array, usa .find() para encontrar el número 100.
// =============================================================================
function find100(numbers) {
  const find100 = numbers.find((e) => e >= 100);
  return find100;
}

// =============================================================================
// 12. Dado el siguiente array, usa .sort() para ordenar los números de menor
// a mayor.
// =============================================================================
function sortFromMinToMax(numbers) {
  const sortFromMinToMax = numbers.sort(function (a, b) {
    return a - b;
  });
  return sortFromMinToMax;
}

// =============================================================================
// 13. Dado el siguiente array, usa .some() para saber si hay algún número
// par.
// =============================================================================
function thereAreEven(numbers) {
  const thereAreEven = numbers.some((e) => e % 2 == 0);
  return thereAreEven;
}

// =============================================================================
// 14. Dado el siguiente array, usa .every() para saber si todas las películas
// son del año 2018.
// El objecto pelicula tiene la siguiente forma
// { title: 'título', year: 2018 }
// =============================================================================
function areAllFilms2018(films) {
  const areAllFilms2018 = films.every(item => item.year >= 2018);
  return areAllFilms2018;
}

// =============================================================================
// 15. Dado el siguiente array, usa .join() para concatenar todos los
// nombres en una coma.
// =============================================================================
function joinNames(names) {
  const joinNames = names.join(", ");
  return joinNames;
}

// =============================================================================
// 16. Dado el siguiente array, usa .includes() para saber si 'Perro' está
// incluido en el array.
// =============================================================================
function thereIsADog(animals) {
  const thereIsADog = animals.includes("Perro");
  return thereIsADog;
}

// =============================================================================
// 17. Dado el siguiente array, usa .reverse() para darle la vuelta a los
// elementos del array.
// =============================================================================
function reverseNumbers(numbers) {
  const reverseNumbers = numbers.reverse();
  return reverseNumbers;
}

// =============================================================================
// 18. Dado el siguiente array, usa .from() para convertirlo en un array.
// =============================================================================
function fromStringToArray(string) {
  const fromStringToArray = Array.from(string);
  return fromStringToArray;
}

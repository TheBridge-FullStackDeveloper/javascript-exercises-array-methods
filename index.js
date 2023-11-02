// =============================================================================
// 1. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean mayor que 18
// =============================================================================
function getAdultsArray(ages) {
  const newArray = ages.filter(function esMayorDeEdad(numero){
    return numero > 18;
  })
  return newArray
}

// =============================================================================
// 2. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean par
// =============================================================================
function getEvenArray(numbers) {
  const newArray = numbers.filter(function esPar(numero){
    return numero % 2 == 0;
  })
  return newArray;
}

// =============================================================================
// 3. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of legends'
// El objeto streamer tiene la siguiente forma
// { name: 'Nombre', gameMorePlayed: 'League of legends' }
// =============================================================================
function getStreamersLOL(streamers) {
    const lolStreamers = streamers.filter(function(streamers) {
      return streamers.gameMorePlayed.toLowerCase() == "league of legends"
    });
    return lolStreamers;
}





// =============================================================================
// 4. Dado el siguiente array, usa .map() para generar un nuevo array con
// cada uno de los valores aumentados en 10.
// =============================================================================
function getIncreasedArray(numbers) {
  const newArray = numbers.map(function(mapi){
    return mapi + 10
  })
  return newArray
}


// =============================================================================
// 5. Dado el siguiente array, usa .map() para generar un nuevo array si hay números 
// negativos se conviertan a positivos y si son positivos se conviertan a negativos.
function getInvertedSignArray(numbers) {
  const newArray = numbers.map(function(mapi){
    return mapi * (-1)
  })
  return newArray
}


// =============================================================================
// 6. Dado el siguiente array, usa .reduce() para calcular la suma de todos
// los valores del array.
// =============================================================================
function getSum(numbers) {
  const sumNumber = numbers.reduce((valorActual, valorAcumulado, indice, array) => {
    return valorActual + valorAcumulado;
  });
  return sumNumber;
}

// =============================================================================
// 7. Dado el siguiente array, usa .reduce() para calcular la media de todos
// los valores del array.
// ej. numbers = [1, 2, 3, 4, 5]
// =============================================================================
function getAverage(numbers) {
  const sumNumber = numbers.reduce((valorActual,valorAcumulado, indice, array) => {
    return valorActual + valorAcumulado;
  })
  const averageNumber = sumNumber / numbers.length;
  return averageNumber;
}


// =============================================================================
// 8. Dado el siguiente array, usa .reduce() para conseguir devolver un
// objeto con el número de veces que se repite cada string.
// =============================================================================
function getRepetitions(array) {
  const arrayRep =  array.reduce(function(result, item) {
    if (!result[item]) {
      result[item] = 1;
    } else {
      result[item]++;
    }
    return result;
  }, {});
  return arrayRep
}



// =============================================================================
// 9. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero }
// =============================================================================
function getSumAges(people) {
  const sumAges = people.reduce(function(sum,person) {
    return sum + person.age;
  },0);
  return sumAges
}


// =============================================================================
// 10. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas que tienen perro.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero, hasDog: boolean }
// =============================================================================
function getSumDogAges(people) {
   const sumDogAges = people.reduce(function(sum,people){
    if(people.hasDog === true){
      return sum + people.age
    } else {
      return sum;
    }
   }, 0);
   return sumDogAges
}

// =============================================================================
// 11. Dado el siguiente array, usa .find() para encontrar el número 100.
// =============================================================================
function find100(numbers) {
  const find = numbers.find(function(element) {
    return element === 100;
  });
  return find;
}


// =============================================================================
// 12. Dado el siguiente array, usa .sort() para ordenar los números de menor
// a mayor.
// =============================================================================
function sortFromMinToMax(numbers) {
  const sortArray = numbers.slice().sort(function(a,b){
    return a - b;
  });
  return sortArray
}
 

// =============================================================================
// 13. Dado el siguiente array, usa .some() para saber si hay algún número
// par.
// =============================================================================
function thereAreEven(numbers) {
  const even = numbers.some(function(element) {
    return element % 2 == 0;
  })
  return even
}

// =============================================================================
// 14. Dado el siguiente array, usa .every() para saber si todas las películas
// son del año 2018.
// El objecto pelicula tiene la siguiente forma
// { title: 'título', year: 2018 }
// =============================================================================
function areAllFilms2018(films) {
  const filmss = films.every(function(element) {
    return element.year === 2018
  })
  return filmss
}


// =============================================================================
// 15. Dado el siguiente array, usa .join() para concatenar todos los
// nombres en una coma.
// =============================================================================
function joinNames(names) {
  return string = names.join(", ");

}


// =============================================================================
// 16. Dado el siguiente array, usa .includes() para saber si 'Perro' está
// incluido en el array.
// =============================================================================
function thereIsADog(animals) {
  return animals.includes("Perro");
}


// =============================================================================
// 17. Dado el siguiente array, usa .reverse() para darle la vuelta a los
// elementos del array.
// =============================================================================
function reverseNumbers(numbers) {
  return numbers.reverse()



}

// =============================================================================
// 18. Dado el siguiente array, usa .from() para convertirlo en un array.
// =============================================================================
function fromStringToArray(string) {
  
  return Array.from(string);



}

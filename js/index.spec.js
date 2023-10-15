describe("map, filter, reduce functions", () => {
  let ages, numbers, streamers, numbersToInvert, numbersToSum, numbersToAverage, arrayToCount, people;

  beforeEach(() => {
    // Set up test data before each test
    ages = [12, 18, 20, 25, 30];
    numbers = [1, 2, 3, 4, 5];
    streamers = [
      { name: "Streamer1", gameMorePlayed: "League of legends" },
      { name: "Streamer2", gameMorePlayed: "Fortnite" },
      { name: "Streamer3", gameMorePlayed: "League of legends" },
    ];
    numbersToInvert = [-1, -2, 3, 4, -5];
    numbersToSum = [1, 2, 3, 4, 5];
    numbersToAverage = [1, 2, 3, 4, 5];
    arrayToCount = ["a", "b", "a", "c", "b", "a"];
    people = [
      { name: "Person1", age: 25, hasDog: true },
      { name: "Person2", age: 30, hasDog: false },
      { name: "Person3", age: 35, hasDog: true },
    ];
  });

  it("should filter and return adults", () => {
    const result = getAdultsArray(ages);
    expect(result).toEqual([20, 25, 30]);
  });

  it("should filter and return even numbers", () => {
    const result = getEvenArray(numbers);
    expect(result).toEqual([2, 4]);
  });

  it("should filter and return streamers who play League of Legends", () => {
    const result = getStreamersLOL(streamers);
    expect(result).toEqual([
      { name: "Streamer1", gameMorePlayed: "League of legends" },
      { name: "Streamer3", gameMorePlayed: "League of legends" },
    ]);
  });

  it("should map and increase numbers by 10", () => {
    const result = getIncreasedArray(numbers);
    expect(result).toEqual([11, 12, 13, 14, 15]);
  });

  it("should map and invert the sign of numbers", () => {
    const result = getInvertedSignArray(numbersToInvert);
    expect(result).toEqual([1, 2, -3, -4, 5]);
  });

  it("should reduce and return the sum of numbers", () => {
    const result = getSum(numbersToSum);
    expect(result).toBe(15);
  });

  it("should reduce and return the average of numbers", () => {
    const result = getAverage(numbersToAverage);
    expect(result).toBe(3);
  });

  it("should reduce and count repetitions in the array", () => {
    const result = getRepetitions(arrayToCount);
    expect(result).toEqual({ "a": 3, "b": 2, "c": 1 });
  });

  it("should reduce and return the sum of ages", () => {
    const result = getSumAges(people);
    expect(result).toBe(90);
  });

  it("should reduce and return the sum of ages for people with dogs", () => {
    const result = getSumDogAges(people);
    expect(result).toBe(60);
  });
});

describe("find, sort, find, every, some, join, reverse, from functions", () => {
  let numbers, films, names, animals, stringToArray;

  beforeEach(() => {
    // Set up test data before each test
    numbers = [10, 20, 30, 40, 100];
    films = [
      { title: "Film1", year: 2018 },
      { title: "Film2", year: 2017 },
      { title: "Film3", year: 2018 },
    ];
    names = ["Alice", "Bob", "Charlie", "David"];
    animals = ["Gato", "Perro", "Pájaro"];
    stringToArray = "Hello";
  });

  it("should find the number 100", () => {
    const result = find100(numbers);
    expect(result).toBe(100);
  });

  it("should sort numbers from min to max", () => {
    const result = sortFromMinToMax(numbers);
    expect(result).toEqual([10, 20, 30, 40, 100]);
  });

  it("should check if there are even numbers", () => {
    const result = thereAreEven(numbers);
    expect(result).toBe(true);
  });

  it("should check if all films are from 2018", () => {
    const result = areAllFilms2018(films);
    expect(result).toBe(false);
  });

  it("should join names with a comma", () => {
    const result = joinNames(names);
    expect(result).toBe("Alice, Bob, Charlie, David");
  });

  it("should check if 'Perro' is in the array", () => {
    const result = thereIsADog(animals);
    expect(result).toBe(true);
  });

  it("should reverse the order of numbers", () => {
    const result = reverseNumbers(numbers);
    expect(result).toEqual([100, 40, 30, 20, 10]);
  });

  it("should convert a string to an array", () => {
    const result = fromStringToArray(stringToArray);
    expect(result).toEqual(["H", "e", "l", "l", "o"]);
  });
});

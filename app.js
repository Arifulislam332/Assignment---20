"use strict";

const arrs = ["a", "b", "c", "d", "e"];

for (const arr of arrs) {
  console.log(arr);
}

const examiner = {
  name: "Sokina🤩",
  age: "biye dewar moto upojokto hoice🤐",
  roll: 56,
  exam: "S.S.C",
};

console.log(Object.keys(examiner));
console.log(Object.values(examiner));
console.log(Object.entries(examiner));

const keys = Object.keys(examiner);

for (const key of keys) {
  console.log(key);
}

const values = Object.values(examiner);

for (const value of values) {
  console.log(value);
}

const entries = Object.entries(examiner);

for (const [key, value] of entries) {
  console.log(`${key}:${value}`);
}

// data structures
// 01. array
// 02. object
// 03.set
// 04. map

// set
const mySet = new Set();

const messsage = "Hello Everybode";

mySet.add(2023);
mySet.add("Bangladesh");
mySet.add(messsage);
mySet.add(`Hi!! ${messsage}`);
console.log(mySet);

const myArr = ["india", 45, "bd", 34, 2, 45, 56, "india", 2];
const deleteCommon = new Set(myArr);

console.log(deleteCommon);

const numbers = new Set([3, 54, 64, 67, 354, 54, 45, 3]);

numbers.delete(54);
numbers.clear();
console.log(numbers);

const passIntheBangla = new Set([
  "Ariful",
  "Sohan",
  "Al-Amin",
  "Farhad",
  "Evana",
]);
const passIntheEnglish = new Set([
  "Tahia",
  "Ahona",
  "Ariful",
  "Al-Amin",
  "Sokina",
]);
const passIntheMath = new Set([
  "Tahia",
  "Bushra",
  "Ariful",
  "Al-Amin",
  "Sohan",
]);

// Find out who has passed both subjects

function findStudentWhohasPassBoth(bangla, english, math) {
  const studentPassBoth = new Set();

  for (const student of math) {
    if (bangla.has(student) && english.has(student)) {
      studentPassBoth.add(student);
    }
  }
  return studentPassBoth;
}

console.log;
findStudentWhohasPassBoth(passIntheBangla, passIntheEnglish, passIntheMath);

//  Find out who has passed Math subjects
function findStudentWhohasPassEnglish(bangla, english, math) {
  const studentPassEnglish = new Set();
  for (const student2 of english) {
    if (!math.has(student2) && !bangla.has(student2)) {
      studentPassEnglish.add(student2);
    }
  }
  return studentPassEnglish;
}

console.log(
  findStudentWhohasPassEnglish(passIntheBangla, passIntheEnglish, passIntheMath)
);

// zoo
const animals = new Map();

const addAnimal = (species) => {
  if (animals.has(species)) {
    let count = animals.get(species);
    animals.set(species, count + 1);
  } else {
    animals.set(species, 1);
  }
};

const removeAnimals = (species) => {
  if (animals.has(species)) {
    let count = animals.get(species);
    animals.set(species, count - 1);
  } else {
    console.log(`${species} is not available.`);
  }
};

addAnimal("tiger");
addAnimal("Lion");
addAnimal("tiger");
addAnimal("Deer");
addAnimal("Snake");
addAnimal("Snake");
addAnimal("Lion");
addAnimal("Lion");

removeAnimals("Deer");
removeAnimals("Lion");
removeAnimals("tiger");
removeAnimals("Zebra");
removeAnimals("Dog");

console.log(animals);

// string
const str = "Never give up friends";
console.log(str.length);
console.log(str[9]);
console.log(str.charAt(6));
console.log(str.at(-5));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.repeat(100));
console.log(str.replace("friends", "Arif"));

const splittedStr = str.split("");

console.log(splittedStr);

const str2 = "        Bangladesh         ";

console.log(str2.trim());

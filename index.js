//  problem:1 --
const people = [
  { name: "John Doe", age: 28, gender: "Male" },
  { name: "Jane Smith", age: 34, gender: "Female" },
  { name: "Sam Wilson", age: 22, gender: "Male" },
  { name: "Lisa Johnson", age: 45, gender: "Female" },
  { name: "Chris Evans", age: 30, gender: "Male" },
  { name: "Emily Brown", age: 27, gender: "Female" },
];

// const result = people
//   .filter((man) => man.gender !== "Female")
//   .map((nm) => nm.name);
// console.log(result);

const result = (people) => {
  const result = people
    .filter((man) => man.gender !== "Female")
    .map((nm) => nm.name);
  return result;
};

// console.log(result(people));

//  problem:2 --

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "title 1949", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
];

const booksFunction = (books) => {
  const result = books.map((book) => book.title);
  return result;
};
// console.log(booksFunction(books));

//  problem:3 ---

const square = (num) => num * num;
const double = (num) => num * 2;
const add5 = (num) => num + 5;

const compositionFunction = (num) => add5(double(square(num)));

const res = compositionFunction(2);
console.log(res);

// problem -4

const carsObj = [
  {
    make: "BMW",
    model: "BM1",
    year: 2013,
  },
  {
    make: "Tesla",
    model: "S1",
    year: 2018,
  },
  {
    make: "Honda",
    model: "SUV V2",
    year: 2018,
  },
];

const carSortingByYear = (cars) => {
  const sort = (a, b) => b - a;
  console.log(cars.sort(sort));
};

carSortingByYear(carsObj);

// problem-5

const findAndModify = function (people, name) {
  const checkName = (person) => {
    return person.name === name;
  };
  const indexByName = people.findIndex(checkName);
  if (indexByName >= 0) {
    people[indexByName].age += 5;
    console.log(people[indexByName]);
  }
};

// findAndModify(personArrOfObj, "John");

// problem-6
const sumOfEvenNumbers = (arr) => {
  return arr.reduce((acc, num) => {
    return num % 2 === 0 ? acc + num : acc;
  }, 0);
};

const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumOfEvenNumbers(numbers));

// problem-7
const leapYearChecker = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("It's a leap year");
  } else {
    console.log("It's not a leap year");
  }
};
leapYearChecker(2000);

// problem-8
const countVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  console.log(count);
};
countVowels("I am learning JavaScript");

// problem-9

const uniqueValues = (arr) => {
  return [...new Set(arr)];
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(uniqueValues(arr));

// problem-10

const findMaximumValue = (arr) => {
  return Math.max(...arr);
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findMaximumValue(arr1));

// problem-11
const students = [
  { name: "Alice", grades: [85, 92, 88] },
  { name: "Bob", grades: [75, 80, 72] },
  { name: "Charlie", grades: [95, 90, 93] },
  { name: "David", grades: [60, 70, 65] },
];

const calculateAverage = (grades) => {
  const total = grades.reduce((acc, grade) => acc + grade, 0);
  console.log("problem-11", total);
  return (total / grades.length).toFixed(2);
};
const averageGrades = (students) => {
  return students.map((student) => ({
    name: student.name,
    averageGrade: calculateAverage(student.grades),
  }));
};
console.log("problem-11", averageGrades(students));

// problem-12
const items = [
  { quantity: 2, price: 10 },
  { quantity: 5, price: 20 },
  { quantity: 3, price: 15 },
];

const calculateTotal = (items) => {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
};
console.log("problem-12", calculateTotal(items));

// problem-13
const findCommonElementsInArr = (arr1, arr2) => {
  return arr1.filter((element) => arr2.includes(element));
};
const arrayA = [1, 2, 3, 4, 5];
const arrayB = [4, 5, 6, 7, 8];
const commonElements = findCommonElementsInArr(arrayA, arrayB);
console.log("problem-13", commonElements);

// problem-14
const customers = [
  { name: "Alice", purchases: 4, loyaltyPoints: 100 },
  { name: "Bob", purchases: 6, loyaltyPoints: 200 },
  { name: "Charlie", purchases: 8, loyaltyPoints: 300 },
  { name: "David", purchases: 2, loyaltyPoints: 150 },
  { name: "Eve", purchases: 5, loyaltyPoints: 250 },
];

const transformCustomers = (customers) => {
  return customers
    .filter((customer) => customer.purchases > 5)
    .map((customer) => ({
      ...customer,
      loyaltyPoints: customer.loyaltyPoints * 2,
    }));
};
console.log("problem-14", transformCustomers(customers));

// problem -15

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = args.toString();

    if (cache[key]) {
      console.log("Returning cached result for:", args);
      return cache[key];
    }

    console.log("Computing result for:", args);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(3, 4));
console.log(memoizedAdd(3, 4));
console.log(memoizedAdd(5, 6));

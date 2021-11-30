interface Human {
  //interface는 typescript에서만 작동한다. js에서는 작동하지않음
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Sky",
  age: 30,
  gender: "male",
};

// const sayHi = (name: string, age: number, gender: string): string => {
//   return `Hello ${name}, you are ${age}, you are a ${gender}!`;
// };

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));

export {};

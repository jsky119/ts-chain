// interface Human {
//   //interface는 typescript에서만 작동한다. js에서는 작동하지않음
//   name: string;
//   age: number;
//   gender: string;
// }

class Human {
  //js에서 interface를 넣고싶을때 class를 사용한다.
  public name: string; //ts에서는 클래스가 어떤 속성을 가져야하는지 선언해야함
  public age: number; //js에서는 public과 private의 차이를 신경쓰지않음
  public gender: string; //만약 접근제어자를 private로 선언한다면 Human class 외부에서 호출되거나 변경되지 않는다
  constructor(name: string, age: number, gender?: string) {
    //gender뒤의 물음표는 optional을 뜻한다
    //constructor생성자 는 method인데 class가 시작할 때마다 호출된다(class로부터 객체를 만들 때)
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// const person = {
//   name: "Sky",
//   age: 30,
//   gender: "male",
// };

const jsky = new Human("Jsky", 30, "male");

// const sayHi = (name: string, age: number, gender: string): string => {
//   return `Hello ${name}, you are ${age}, you are a ${gender}!`;
// };

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(jsky));

export {};

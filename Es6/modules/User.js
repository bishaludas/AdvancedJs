export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export function getName(user) {
  console.log(user.name);
}

export function getAge(user) {
  console.log(user.age);
}

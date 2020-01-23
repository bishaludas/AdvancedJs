function sum(a, b) {
  return a + b;
}

function isPositive(num) {
  return num > 0;
}

function randomNum() {
  return Math.random;
}

// *****Arrow function**************
let sum2 = (a, b) => a + b;
console.log(sum2(5, 6));

let isPositive2 = num => num > 0;
console.log(isPositive2(5));

let randomNum2 = () => Math.random();
console.log(randomNum2());
// *************************

class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    setTimeout(function() {
      console.log("Function : " + this.name);
    }, 100);
  }

  fetchName() {
    setTimeout(() => {
      console.log("Arrow : " + this.name);
    }, 100);
  }
}

let user1 = new User("Bobo");
user1.getName();
user1.fetchName();

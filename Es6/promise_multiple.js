const greetOne = new Promise((resolve, reject) => {
  resolve({
    name: "Bob",
    greet: "Good Morning",
    details: {
      dob: "rte",
      address: "asdada"
    }
  });
});

const greetTwo = new Promise((resolve, reject) => {
  resolve("Hello, how are you ?");
});

const greetThree = new Promise((resolve, reject) => {
  resolve("Ola amigo");
});

Promise.all([greetOne, greetTwo, greetThree]).then(message => {
  console.log(message);
});

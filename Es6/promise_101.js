function test() {
  console.log("hello");
}
test();

let num = 1;

let greet = new Promise((resolve, reject) => {
  sum = num + 5;
  if (sum == 2) {
    resolve({ data: sum, status: "success" });
  } else {
    reject({ status: "Fail" });
  }
});

greet
  .then(message => {
    console.log(message);
  })
  .catch(message => {
    console.log(message);
  });

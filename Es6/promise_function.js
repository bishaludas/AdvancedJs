let eating = true;
let sleeping = true;

function ishealthy() {
  return new Promise((resolve, reject) => {
    if (eating && sleeping) {
      resolve({
        msg1: "person needs exercise",
        msg2: "person is going to join gym"
      });
    } else if (eating) {
      resolve("Person is hungry");
    } else if (sleeping) {
      resolve("person is tired");
    } else {
      reject("Is a robot");
    }
  });
}

ishealthy()
  .then(message => {
    console.log(message);
  })
  .catch(message => {
    console.log("Not a person : " + message);
  });

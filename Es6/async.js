function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Make request to ${location}`);
    if (locaion == "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to google");
    }
  });
}

function processRequest(response) {
  return new Promise(resolve => {
    console.log("processing request");
    resolve(`Extra information ${response}`);
  });
}

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Make request to ${location}`);
    if (location == "Google") {
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

// The promise way
makeRequest("Google")
  .then(response => {
    console.log("Request received");
    return processRequest(response);
  })
  .then(processed_response => {
    console.log(processed_response);
  })
  .catch(err => {
    console.log(err);
  });

// Anync way
async function start() {
  try {
    const response = await makeRequest("Google");
    console.log("Request received");
    const process = await processRequest(response);
    console.log(process);
  } catch (err) {
    console.log(err);
  }
}

start();

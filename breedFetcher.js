const request = require('request');

process.stdout.write("Please enter a cat breed: ");

process.stdin.on('data', data => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${data}`, (error, response, body) => {
    if (error) {
      console.log(error);
      process.exit();
    } else if (body === '[]') {
      console.log("Error: Breed Not Found! Please Try Again!");
      process.exit();
    }
    const data = JSON.parse(body)[0];
    console.log(data.description);
    process.exit();
  });
});


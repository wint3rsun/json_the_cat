const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    (error) ? callback(error, null)
      : (body === '[]') ? callback(null,`Error Breed Not Found!`) : callback(null, JSON.parse(body)[0].description);
  });
  
};

module.exports = { fetchBreedDescription };
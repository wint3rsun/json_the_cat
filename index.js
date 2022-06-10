const { fetchBreedDescription } = require('./breedFetcher');


//process.stdout.write("Please enter a cat breed: ");
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  (error) ? console.log('Error fetch details: ', error) : console.log(desc);
});

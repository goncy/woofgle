const fs = require('fs');

module.exports = () => ({
  dogs: fs.readdirSync('./public')
    .filter(file => /.(png|jpg)/.test(file))
    .map(dog => ({
      "id": dog,
      "name": dog.match(/-(.*?)\./)[1].replace(/_/g, ' '),
      "image":`http://localhost:8888/${dog}`
    }))
})
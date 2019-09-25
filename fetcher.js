const request = require('request');
const fs = require('fs');
const input = process.argv.slice(2);
let url = input[0];
let path = input[1];

const requireWeb = function(url, path) {
  request(url, (error, response, body) => {
    fs.writeFile(path, body, (error) => {
      if (error) {
        throw error;
      } else {
        console.log(`Downloaded and saved to ${path}`)
      }
    })
  })
}

requireWeb()
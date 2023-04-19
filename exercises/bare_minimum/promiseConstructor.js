/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise ((resolve, reject) => {
    var firstline;
    fs.readFile(filePath, function(err, data) {
      if (err) {
        reject(err);
      } else {
        var string = data.toString();
        var lines = string.split(/\r|\n/g);//string.split("\n"); 'sdflsk /n slfkfjsdljksf /n'
        firstline = lines[0];
        resolve(firstline);
      }
    });
  });
  // fs.promises.readFile(filePath)
  // .then((data) => {
  //   var string = data.toString();
  //   var lines = string.split(/\r|\n/g);//string.split("\n"); 'sdflsk /n slfkfjsdljksf /n'
  //   return lines[0];
  // })
  // .catch((err) => {
  //   throw err;
  // });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise ((resolve, reject) => {
    request.get(url, function(err, response) {
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);
      }
    });
  });
};
// getStatusCodeAsync(url).then((statusCode) => {result = statusCode return result})


// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};

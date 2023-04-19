/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var request = require('needle');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return new Promise ((resolve, reject) => {
    fs.readFile(readFilePath, function(err, data) {
      if (err) {
        reject(err);
      } else {
        var string = data.toString();
        var lines = string.split(/\r|\n/g);//string.split("\n"); 'sdflsk /n slfkfjsdljksf /n'
        firstline = lines[0];
        resolve(firstline);
      }
    });
  })
    .then((username) => {
      if (!username) {
        throw new Error('User name invaild');
      } else {
        var url = 'https://api.github.com/users/' + username;
        var options = {
          headers: { 'User-Agent': 'request' },
        };
        return request('get', url, options);
      }
    })
    .then(function(response) {
      fs.writeFileSync(writeFilePath, JSON.stringify(response.body));
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};

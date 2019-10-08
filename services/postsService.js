var fs = require('fs');

var postsFilePath = 'BD/posts.json';
var getPosts = function() {
  var fileData = fs.readFileSync(postsFilePath, 'utf8');
   var Posts = JSON.parse(fileData);
  return posts;
}

module.exports = {
  getPosts: getPosts
}
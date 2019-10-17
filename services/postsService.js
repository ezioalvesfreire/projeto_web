var fs = require('fs');

var postsFilePath = 'db/posts.json';

var loadFilePosts = function() {
    var fileData = fs.readFileSync(postsFilePath, 'utf8');
    var posts = JSON.parse(fileData);

    return posts;
}

var saveFilePosts = function(posts) {
    var data = JSON.stringify(posts);
    fs.writeFileSync(postsFilePath, data, 'utf-8');
}

module.exports = {
    getPosts: getPosts,
    savePost: savePost
}

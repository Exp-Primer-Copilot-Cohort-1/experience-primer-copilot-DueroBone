// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use the body parser to get data from the body of POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Create a global array to store comments
const comments = [];

// Add a comment to the global array
function addComment(comment) {
    comments.push(comment);
}

// Return all the comments
function getComments() {
    return comments;
}

// Delete all the comments
function deleteComments() {
    comments.length = 0;
}

// Return all the comments in JSON format
app.get('/comments', (req, res) => res.json(getComments()));

// Add a comment
app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    addComment(comment);
    res.json(comment);
});

// Delete all the comments
app.delete('/comments', (req, res) => {
    deleteComments();
    res.json('All comments deleted');
});
const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/index.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/projects.html'));
});

app.get('/downloads', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/downloads.html'));
});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
}); 

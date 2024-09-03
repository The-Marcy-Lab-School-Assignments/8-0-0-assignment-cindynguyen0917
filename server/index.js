const express = require('express');
const app = express();

// controllers
const serveIndex = (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
}
const serveAbout = (req, res, next) => {
    res.send('<h1>Find Out About This Website</h1>');
}
const serveHello = (req, res, next) => {
    const name = req.query.name || "stranger";
    res.send(`hello ${name}`);
}
const serveData = (req, res, next) => {
    const data = [{ name: 'cindy', age: 22, types: ['fairy', 'dark'] }, { name: 'ryan', age: 24, types: ['fire', 'ground'] }, { name: 'america', age: 21, types: ['fairy'] }, { name: 'kevin', age: 22, types: ['ghost'] }, { name: 'chris', age: 21, types: ['ground', 'water'] }];
    res.send(data);
}

// endpoints
app.get('/', serveIndex);
app.get('/about', serveAbout);
app.get('/api/hello', serveHello);
app.get('/api/data', serveData);

// listen
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 
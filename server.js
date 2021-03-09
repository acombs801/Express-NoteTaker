// Dependencies

const express = require('express');
const path = require('path');

// Setting up Express App

const app = express();
const PORT = 3001;

// 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
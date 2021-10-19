const express = require('express');
const app = express();

'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('./api/S2REALvF.json');
let S2 = JSON.parse(rawdata);
console.log(S2);


app.get('/api/S2', (req, res) => res.send(S2))


app.get('/api/S2/:id', (req, res) => {
    const id = req.params.id;
    const reply = S2[id];
    res.send(reply);
});

// app.listen(8080)
app.listen(8080, () => {
    console.log(`Corriendo servidor en el puerto 8080`);
});
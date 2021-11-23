const express = require('express');
const axios = require("axios")
const qs = require("qs")
const app = express();
'use strict';


async function getToken() {
    const dataAuth = qs.stringify({
        'client_id': 'Client_SEseCC$2y$4',
        'grant_type': 'password',
        'username': 'GeNT0k3n64$2y$4',
        'password': '$3$ecCT0k3Ns',
        'scope': 'read',
        'client_secret': 'PassS3S3cc$2y$4'
    });

    const configAuth = {
        method: 'post',
        url: 'http://132.226.123.35:9003/oauth/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: dataAuth
    };

    axios(configAuth).then(function (response) {
        let token = "Bearer " + response.data.access_token;
        return token

    }).catch(function (error) {
        console.log(error);
    });

}

// A partir de aquí se puede escribir código de peticiones

async function makePetition() {
    const configPetition = {
        method: 'post',
        url: 'http://132.226.123.35:8080/v1/spic',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkdlTlQwazNuNjQkMnkkNCIsImp0aSI6Ik5vR0s0Mk5lIiwic2NvcGUiOiJyZWFkICIsImlhdCI6MTYzNzYzNTEzNiwiZXhwIjoxNjM3NjM1NDM2fQ.6RRu5QsrrnwKlTzPppsr--QIOkd-Y8uGnIy8I3bKa8c'
        }
    }

    let token = await getToken();

    console.log(token)
    // axios(configPetition)
    // .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
}


makePetition()



// console.log(valor);
// app.get('/api/S2', (req, res) => res.send(s2))

// app.listen(8080)
app.listen(8080, () => {
    console.log(`Corriendo servidor en el puerto 8080`);
});
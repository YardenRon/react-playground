const express = require('express');
const app = express();
const port = 3001;
const { URL, URLSearchParams } = require('url');
const fetch = require('node-fetch');

/* 
* Note: this module developed for learning purposes only
* The right way to handle CORS policy is to use the cors middleware (cors npm package)
*/

// Used in order to parse JSON passed in requests body
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World'));

const postmanUrl = "https://postman-echo.com";

// Chainable route handlers
app.route('/postman')
  .get(handleGetRequest)
  .post(handlePostRequest)
  .options(handleOptionsRequest);

async function handleGetRequest(req, res) {
    const url = new URL(postmanUrl + "/get");
    url.search = new URLSearchParams(req.query).toString();
    const postmanResponse = await fetch(url.toString());
    const responseText = await postmanResponse.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(responseText);
}

async function handlePostRequest(req, res) {
  const url = postmanUrl + "/post";
  const postmanResponse = await fetch(url, {
    method: 'post',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' }
  });
  const responseText = await postmanResponse.text();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.send(responseText);
}

async function handleOptionsRequest(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.send();
}

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
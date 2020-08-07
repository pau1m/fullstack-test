const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const CakeRouter = require('cakes/routes.config.js');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // it's just a test
  res.header('Access-Control-Allow-Methods', 'GET, POST', 'PATCH', 'DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
});
app.use(express.static('dist'))
app.use(bodyParser.json());
//CakeRouter.routesConfig(app);

app.listen(1338, () => console.log('Listening on port 1337, API on port 1338!'))

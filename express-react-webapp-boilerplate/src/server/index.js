const express = require('express');
const app = express();
const CakeRouter = require('./cakes/routes.config.js');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST', 'PATCH', 'DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
    return res.send(200);
  } else {
    return  next();
  }
});

app.use(express.static('dist'))
app.use(express.json());


CakeRouter.routesConfig(app);

app.listen(1337, () => console.log('Listening on port 1337'))

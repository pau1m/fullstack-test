const express = require('express');
const app = express();
const CakeRouter = require('./cakes/routes.config.js')
const expressValidator = require('express-validator')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST', 'PUT', /*patch*/ 'DELETE')
  res.header('Access-Control-Expose-Headers', 'Content-Length')
  res.header('Access-Control-Allow-Headers', 'Accept, Content-Type, X-Requested-With, Range')
  if (req.method === 'OPTIONS') {
    return res.send(200)
  } else {
    return  next()
  }
});



app.use(express.static('dist'))
app.use(express.json());
app.use(expressValidator())


CakeRouter.routesConfig(app);

app.listen(1338, () => console.log('Listening on port 1338'))

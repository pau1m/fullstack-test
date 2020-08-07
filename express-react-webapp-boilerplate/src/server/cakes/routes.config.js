const CakeController = require('../cakes/controller/cakes.controller')

exports.routesConfig = async function (app) {

  const aCake = {
    id: 1,
    name: 'foo',
    comment: 'boo',
    imageUrl: 'moo',
    yumFactor: 1
  }

  // todo prefix api/v1 to alla

  app.get('/api/v1/cakes', [CakeController.fetchAll])

  app.get('/api/v1/cakes/:id', [CakeController.getById])

  app.post('/api/v1/cakes', [CakeController.insertCake])

  app.put('/api/v1/cakes/:id', [CakeController.updateCake])

  // app.put('/api/v1/cakes/:id',(req, res) => res.status(
  //   200
  // ).send())



  app.delete('/api/v1/cakes/:id', (req, res) => res.status(
    200
  ).send())
}

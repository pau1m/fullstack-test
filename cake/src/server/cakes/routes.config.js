const CakeController = require('../cakes/controller/cakes.controller')

exports.routesConfig = function (app) {

  app.get('/api/v1/cakes', [CakeController.fetchAll])

  app.get('/api/v1/cakes/:id', [CakeController.getById])

  app.post('/api/v1/cakes', CakeController.validateCake(), CakeController.insertCake)

  app.put('/api/v1/cakes/:id', CakeController.validateCake(), CakeController.updateCake)

  app.delete('/api/v1/cakes/:id', [CakeController.deleteCake])

}

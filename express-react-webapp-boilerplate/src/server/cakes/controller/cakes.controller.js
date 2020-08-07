const CakeModel = require('../model/cake.model.js');

// @todo refactor for dryness

exports.getById = (req, res) => {

  CakeModel.findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(() => {
      res.sendStatus(404);
    })
};

exports.fetchAll = (req, res) => {
  CakeModel.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(() => {
      res.sendStatus(404);
    })
}


exports.insertCake = ( req, res ) => {
  // @todo validation middleware
  CakeModel.createItem(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(() => {
      res.sendStatus(404);
    })
}

exports.updateCake = ( req, res ) => {
  console.log('uc')
  console.log(req.params.id)

  CakeModel.updateItem(req.params.id, req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(() => {
      res.sendStatus(404);
    })
}

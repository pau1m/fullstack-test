const CakeModel = require('../model/cake.model.js');

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
  CakeModel.createItem(req.body)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch(() => {
      res.sendStatus(404);
    })
}

exports.updateCake = ( req, res ) => {
  CakeModel.updateItem(req.params.id, req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(() => {
      res.sendStatus(404);
    })
}

exports.deleteCake = (req, res) => {
  CakeModel.removeById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch(() => {
      res.sendStatus(404);
    })
}

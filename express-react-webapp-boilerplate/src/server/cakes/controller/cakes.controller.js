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

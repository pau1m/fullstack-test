const CakeModel = require('../model/cake.model.js')
const { body, validationResult } = require('express-validator/check')


const extract = (cake) => {
  const { name, comment, imageUrl, yumFactor } = cake

  return {
    name: name,
    comment: comment,
    imageUrl: imageUrl,
    yumFactor: yumFactor
  }
}

exports.getById = (req, res) => {

  CakeModel.findById(req.params.id)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(() => {
      res.sendStatus(404)
    })
};

exports.fetchAll = (req, res) => {
  CakeModel.findAll()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch((e) => {
      res.sendStatus(404)
    })
}

exports.insertCake = ( req, res ) => {
  const errors = validationResult(req)
   if (!errors.isEmpty()) {
     return res.status(400)
       .json({ errors: errors.array() })
       .end();
   }

  CakeModel.createItem(extract(req.body))
    .then((result) => {
      res.status(201).send(result)
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(500)
    })
}

exports.updateCake = ( req, res ) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400)
      .json({ errors: errors.array() })
      .end();
  }

  CakeModel.updateItem(req.params.id, extract(req.body))
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(() => {
      res.sendStatus(404)
    })
}

exports.deleteCake = (req, res) => {
  CakeModel.removeById(req.params.id)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(() => {
      res.sendStatus(404)
    })
}

// Validation
exports.validateCake = (method) => {
      return [
        body('yumFactor', 'Must be a number').isNumeric(),
        body('yumFactor', 'Value must be populated').exists(),
        body('name', 'No name given').exists(),
        body('comment', 'No comment provided').exists(),
        body('imageUrl', 'No url provided').exists()
      ]
}

//@todo check params.id
//@todo check db result on update (not found)



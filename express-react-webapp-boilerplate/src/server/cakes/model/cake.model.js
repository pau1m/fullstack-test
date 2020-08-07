const mongoose = require('../../common/mongoose.services').mongoose
const Schema = mongoose.Schema;

const cakeSchema = new Schema({
  cakeId: Number,
  name: String,
  comment: String,
  imageUrl: String,
  yumFactor: Number
})

// @todo limit yum 1 - 5

cakeSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

cakeSchema.set('toJSON', {
  virtuals: true
});

const Cake = mongoose.model('Cake', cakeSchema);

cakeSchema.findById = function (cb) {
  return this.model('Cake').find({id: this.id}, cb);
};

exports.findById = (id) => {
  return Cake.findById(id)
    .then((result) => {
      result = result.toJSON();
      delete result._id;
      delete result.__v;
      return result;
    });
};

exports.findAll = async () => {
  return await Cake.find();
}

exports.createItem = (cakeData) => {
  const cake = new Cake(cakeData);
  return cake.save();
  // return by searching by id -- assign save to var
};

exports.updateItem = (cakeData) => {
  // @todo clobber initial item
  const cake = new Cake(cakeData);
  return cake.save();
}

exports.removeById = (cakeId) => {
  return Cake.remove({_id: cakeId})
};

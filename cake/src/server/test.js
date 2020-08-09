// verbose first pass of basic crud test
// config, env etc are beyond scope so no setup / tear down
// @todo make assertions differently for dryness and tidier json comparisons

const frisby = require('frisby')

const host = 'http://localhost:1338'
const endPointPrefix = '/api/v1/cakes/'
const basePath = host + endPointPrefix

const cakes = [
  { name: 'one', comment: 'Was ok', imageUrl: 'one', yumFactor: '1' },
  { name: 'two', comment: 'meh', imageUrl: 'two', yumFactor: '2' },
  { name: 'three', comment: 'twas amazing', imageUrl: 'three', yumFactor: '3' }
]

frisby.globalSetup({
  request: {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
});

it('Checks basic CRUD operations', () => {
  return frisby
    .post(basePath, cakes[0])
    .expect('status', 201)
    .expect('json', 'name', 'one')
    .expect('json', 'comment',  'Was ok')
    .expect('json', 'imageUrl', 'one')
    .expect('json', 'yumFactor', '1')
    // .expect('json',  { name: 'one', comment: 'Was ok', imageUrl: 'one', yumFactor: '1' })
    .then((postRes) => {
      // console.log('post response: ', postRes.json);
      const postResId = postRes.json.id
      return frisby
        .get(basePath + postResId)
        .expect('status', 200)
        .expect('json', 'name', 'one')
        .expect('json', 'comment',  'Was ok')
        .expect('json', 'imageUrl', 'one')
        .expect('json', 'yumFactor', '1')
        .expect('json', 'id', postResId)
    })
    .then((getRes) => {
      const getResId = getRes.json.id
      const cakeOne = cakes[0]
      cakeOne.yumFactor = 5
        return frisby
        .put(basePath + getResId, cakeOne)
          .expect('status', 200)
          .expect('json', 'name', 'one')
          .expect('json', 'comment',  'Was ok')
          .expect('json', 'imageUrl', 'one')
          .expect('json', 'yumFactor', '5')
    })
    .then((putRes) => {
      const putResId = putRes.json.id
      return frisby
        .get(basePath + putResId)
        .expect('status', 200)
        .expect('json', 'yumFactor', '5')
    })
    .then((res) => {
      return frisby
        .delete(basePath + res.json.id)
        .expect('status', 200)
    })
    .then((res) => {
      return frisby
      .get(basePath + res.json.id)
        .expect('status', 404)
    })
});

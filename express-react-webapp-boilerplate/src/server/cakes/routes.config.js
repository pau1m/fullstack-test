
exports.routesConfig = async function (app) {

  const aCake = {
    id: 1,
    name: 'foo',
    comment: 'boo',
    imageUrl: 'moo',
    yumFactor: 1
  }

  // todo prefix api/v1 to all

  app.get('/api/v1/cakes', (req, res) => {
    console.log('hello world');
    res.send(
      aCake
    )
  })

  app.get('/api/v1/cakes/{id}', (req, res) => res.send(
    [aCake, aCake, aCake]
  ))

  app.post('/api/v1/cakes', (req, res) => res.send(
    aCake
  ))

  app.put('/api/v1/cakes', (req, res) => res.send(
    aCake
  ))

  app.delete('/api/v1/cakes', (req, res) => res.status(
    200
  ))
}

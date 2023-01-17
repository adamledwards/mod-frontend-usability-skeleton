const fastify = require('fastify')({logger: false})
const path = require('path')

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
})
fastify.listen({ port: 3000 }, (err, address) => {
    if (err) throw err
    console.log('Server is now listening on ' + address)
  })
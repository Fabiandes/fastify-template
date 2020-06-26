const fastify = require('./app');

fastify.get('/', (request, reply)=>{
    reply.send("Hello World!")
})

fastify.listen(require('./keys').port, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })
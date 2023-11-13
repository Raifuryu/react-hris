async function routes(fastify, options) {
  fastify.get("/", async (request, reply) => {
    return process.env.PORT;
  });
}

module.exports = routes;

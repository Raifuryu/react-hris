require("dotenv").config();

const fastify = require("fastify")({
  logger: true,
});

fastify.register(require("./routes/TrainingRoutes"));

fastify.listen({ port: process.env.PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(process.env.PORT);
});

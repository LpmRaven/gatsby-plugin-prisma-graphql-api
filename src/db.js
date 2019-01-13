const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs: 'generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT_EU,
    secret: process.env.PRISMA_SECRET,
    debug: false,
});

module.exports = db;
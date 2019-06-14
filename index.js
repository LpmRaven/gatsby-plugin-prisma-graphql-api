
const { GraphQLServerLambda } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const { printSchema } = require('graphql');
const fs = require('fs');

const { store } = require('gatsby/dist/redux');
const schema = store.getState().schema;

const fileData = printSchema(schema);

fs.writeFile('prisma.graphql', fileData, error => {
    // handle error
    console.log('schema did not write');

});

const db = new Prisma({
    typeDefs: './prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false,
});

const lambda = new GraphQLServerLambda({
    schema,
    resolverValidationOptions: {
        requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db })
});

module.exports = { server: lambda.graphqlHandler, playground: lambda.playgroundHandler };
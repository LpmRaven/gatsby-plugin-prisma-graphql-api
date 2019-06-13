
//const { GraphQLServerLambda } = require('graphql-yoga');

const express = require('express');
const serverless = require('serverless-http');
const expressPlayground = require('graphql-playground-middleware-express').default;
const { ApolloServer } = require('apollo-server-express');
const graphqlHTTP = require(`express-graphql`)

const { store } = require('gatsby/dist/redux');

// const lambda = new GraphQLServerLambda({
//     schema,
//     resolverValidationOptions: {
//         requireResolversForResolveType: false,
//     },
//     context: req => ({ ...req, db })
// });

// exports.server = lambda.graphqlHandler;
// exports.playground = lambda.playgroundHandler;

const schema = store.getState().schema

const app = express()
app.use(
    `/`,
    graphqlHTTP({
        schema,
        graphiql: true,
    })
)

app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

const handler = serverless(app);

module.exports = { handler };
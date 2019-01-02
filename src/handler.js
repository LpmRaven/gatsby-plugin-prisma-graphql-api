const { GraphQLServerLambda } = require('graphql-yoga');
const Mutation = require('./resolvers/mutation');
const Query = require('./resolvers/query');
const db = require('./db');

const resolvers = {
    Query,
    Mutation
};

const lambda = new GraphQLServerLambda({
    typeDefs: 'schema.graphql',
    resolvers,
    resolverValidationOptions: {
        requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db })
});

exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;

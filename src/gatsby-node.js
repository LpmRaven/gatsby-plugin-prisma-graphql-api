const { GraphQLServerLambda } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const { printSchema } = require('gatsby/graphql');

exports.onPostBootstrap = ({ store, reporter, pluginOptions }) => {
    const schema = store.getState().schema;
    const fileData = printSchema(schema);

    const db = new Prisma({
        typeDefs: fileData,
        endpoint: pluginOptions.prismaEndpoint,
        secret: pluginOptions.prismaSecret,
        debug: false,
    });

    return new GraphQLServerLambda({
        schema,
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        context: req => ({ ...req, db })
    });
}
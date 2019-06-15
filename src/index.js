
// const { GraphQLServerLambda } = require('graphql-yoga');
// const { Prisma } = require('prisma-binding');
// const { printSchema } = require('graphql');
// const fs = require('fs');

// const { store } = require('gatsby/dist/redux');
// const schema = store.getState().schema;

// const fileData = printSchema(schema);

// fs.writeFile('prisma.graphql', fileData, error => {
//     // handle error
//     console.log('schema did not write');

// });

// const db = new Prisma({
//     typeDefs: './prisma.graphql',
//     endpoint: process.env.PRISMA_ENDPOINT,
//     secret: process.env.PRISMA_SECRET,
//     debug: false,
// });

// const lambda = new GraphQLServerLambda({
//     schema,
//     resolverValidationOptions: {
//         requireResolversForResolveType: false,
//     },
//     context: req => ({ ...req, db })
// });

// module.exports = { server: lambda.graphqlHandler, playground: lambda.playgroundHandler };


// const { GraphQLServerLambda } = require('graphql-yoga');
// const { Prisma } = require('prisma-binding');
// const { printSchema, parse, buildSchema, buildClientSchema } = require('graphql');
// const fs = require('fs');
// const util = require('util')


// const { store } = require('gatsby/dist/redux');

// const handler = async () => {
//     const schema = store.getState().schema;
//     console.log(util.inspect(schema, false, null, true));

//     const graphqlSchemaObj = buildClientSchema(schema);


//     const fileData = printSchema(schema);

//     // const db = new Prisma({
//     //     typeDefs: fileData,
//     //     endpoint: process.env.PRISMA_ENDPOINT,
//     //     secret: process.env.PRISMA_SECRET,
//     //     debug: false,
//     // });

//     // const lambda = new GraphQLServerLambda({
//     //     schema,
//     //     resolverValidationOptions: {
//     //         requireResolversForResolveType: false,
//     //     },
//     //     context: req => ({ ...req, db })
//     // });
// }

// module.exports = handler;

// // exports.server = handler.graphqlHandler;
// // exports.playground = handler.playgroundHandler;

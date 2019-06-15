const {
  handler
} = require(`./index.js`); //exports.onPostBootstrap = handler;


const {
  GraphQLSchema
} = require(`graphql`);

exports.onPostBootstrap = ({
  store,
  reporter
}) => {
  const schema = store.getState();
  console.log('schema:', schema.schema);
  reporter.info(schema instanceof GraphQLSchema ? `Hooray, a GraphQLSchema!` : `Boo, where's the Schema?`);
};

console.log("Testing my plugin");
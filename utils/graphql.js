import { ApolloServer, gql } from 'apollo-server';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import makeExecutableSchema from 'graphql-tools';
import TransAT37 from '../models/TransAT37';

// Define the schema using SDL
const typeDefs = gql`
  type Query {
    hello: String
  }

  type TransAT37 {
    COD_INST: String
    TIPO_DE_TRANSFERENCIA_ELEC1638: String
    TIPO_DE_CLIENTE_TRANSFEREN1640: String
    IDENTIFICACION_DEL_CLIENTE1641: String
    NOMBRE_DEL_CLIENTE_TRANSFE1642: String
    CODIGO_CUENTA_CLIENTE_AT37: String
    MONTO_DE_LA_TRANSFERENCIA_AT37: String
    MONEDA: String
    FECHA_DE_LA_TRANSFERENCIA_AT37: String
    REFERENCIA_DE_LA_TRANSFERE1653: String
    TIPO_DE_CLIENTE_CONTRAPART1650: String
    IDENTIFICACION_DEL_CLIENTE1648: String
    NOMBRE_O_RAZON_SOCIAL_DEL_1647: String
    CODIGO_CUENTA_CLIENTE_CONT1644: String
  }
`;






const startServer = (db) => {
  // Define the resolvers
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      transAT37: () => db.TransAT37_Mongo_Model.find()
    },
  };
  // Create the ApolloServer instance
  const server = new ApolloServer({ typeDefs, resolvers });
  // Start the server
  server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`);
  });
}

export default startServer;
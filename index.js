import pkg from 'graphql-yoga';
import resolvers from './graphql/resolvers.js';

const { GraphQLServer } = pkg;

const server = new GraphQLServer({
    typeDefs: './graphql/schema.graphql',
    resolvers
});

server.start(() => console.log('GraphQL Server Running'));
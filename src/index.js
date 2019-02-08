import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query';
import User from './resolvers/User';
import Post from './resolvers/Post';
import Mutation from './resolvers/Mutation';
import Comment from './resolvers/Comment';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        User,
        Post,
        Comment,
        Mutation
    },
    context: {
        db
    }
})

server.start(() => {
    console.log('The server is up at http://localhost:4000')
})
# Graphql API
> Graphql server setup. 

# Files
- src/index.js
- src/db.js
- src/schema.graphql
- src/resolvers/Query.js
- src/resolvers/Comment.js
- src/resolvers/Post.js
- src/resolvers/User.js
- src/resolvers/Mutation.js

# File Description
### src/index.js
 > Contains the main server. graphql-yoga is used to setup server for the GraphQL /*https://github.com/prisma/graphql-yoga*/.

### src/db.js  
 > Contains the main data for the application. Bascially, it is obtained from different Rest API End Points in the future.

### src/schema.graphql
 > Contains the typedefs(Schema) for the graphql.
 
### src/resolvers/Query.js
 > Contains the query resolvers.
 > Resolvers are the function that provides values for the each field in the schema.
 
### src/resolvers/Comment.js
 > Contains the comment resolvers.
 
### src/resolvers/Post.js
 > Contains the post resolvers.
 
### src/resolvers/User.js
 > Contains the user resolvers.
 
### src/resolvers/Mutation.js
 > Mutation helps to modify server-side data.
 > Contains the mutation resolvers.
 


# Running the server
````
    npm install

    npm run start
````



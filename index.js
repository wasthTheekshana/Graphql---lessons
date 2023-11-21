import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js"
import { games, authors, reviews } from "./_db.js"

const resolvers = {
    Query: {
        games() {
            return games
        },
        authors(){
            return authors
        },
        reviews(){
            return reviews
        }
    }
}

//server step
const  server = new ApolloServer({

    /*
    * games(){
    * title
    * }
    * */
    //typeDefs -- definitions of types of data
    typeDefs,
    resolvers
    //resolvers
})

const { url } =  await startStandaloneServer(server,{
    listen: { port : 4000}
})

console.log("Server ready at port",4000);
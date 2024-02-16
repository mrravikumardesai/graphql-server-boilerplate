import { ApolloServer } from "@apollo/server";
import User from "../model/User";
import { startStandaloneServer } from '@apollo/server/standalone';
import { user } from "./user";

const createApolloServer = async() =>{

      // create graphql server
      const gqlServer = new ApolloServer({
        typeDefs: `
            type Query{
               hello:String
            }
            type Mutation{
                ${user.mutations}
            }
        `, // schema
        resolvers: {
            Query: {
              ...user.resolvers.queries
            },
            Mutation: {
             ...user.resolvers.mutations
            }
        }  // function which will execture
    })

    // start gql server
    await gqlServer.start()

    return gqlServer

}

export default createApolloServer


// createUser: async (_,
//     { first_name, last_name, email, password }:
//         { first_name: string, last_name: string, email: string, password: string }) => {
//             console.log("REQUEST AAI")
//             console.log(first_name,last_name,email,password);
            
//     await User.create({
//         first_name, last_name, email, password, salt: "asda"
//     }).then((created:any) => {
//         console.log("User Created",created)
//         return true
//         }
//     )
//         .catch((e:any) => {
//             console.log(e.message)
//             return false
//         })
// }
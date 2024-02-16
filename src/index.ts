import express from "express"
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { expressMiddleware } from "@apollo/server/express4"

const app = express()
const PORT = process.env.PORT || 8000

async function init() {

    // create graphql server
    const gqlServer = new ApolloServer({
        typeDefs: `
            type Query{
                hello:String
                sayName(name:String):String
            }
        `, // schema
        resolvers: {
            Query:{
                hello:()=> "HELLO",
                sayName:(_,{name})=>`Hello ${name}!`
            }
        }  // function which will execture
    })

    // start gql server
    await gqlServer.start()

    app.use(express.json())

    app.get("/", (req, res) => {
        res.json({ message: "Working" })
    })


    app.use("/graphql", expressMiddleware(gqlServer))


    app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
}

init()
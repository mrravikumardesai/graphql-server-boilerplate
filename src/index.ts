import express from "express"

import { expressMiddleware } from "@apollo/server/express4"
import connectDb from "./mongodb/dbconfig";
import User from "./model/User";
import createApolloServer from "./graphql";

const app = express()
const PORT = process.env.PORT || 8000

async function init() {

  

    app.use(express.json())

    app.get("/", (req, res) => {
        res.json({ message: "Working" })
    })


    app.use("/graphql", expressMiddleware(await createApolloServer()))


    app.listen(PORT, () => {
        connectDb()
        console.log(`Server started at port ${PORT}`)
    })
}

init()
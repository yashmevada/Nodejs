import {ApolloServer,gql} from "apollo-server"
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"



import mongoose from "mongoose"
//import { MONGO_URL } from "./config.mjs"
import typeDefs from "./schemaGql.mjs"
mongoose.set('strictQuery', false);
const db="mongodb+srv://yashlal:Yash@cluster0.ehijiyg.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(db,{
    useNewUrlParser:true,
    useUniFiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb")
})

mongoose.connection.on("error",()=>{
    console.log("connecting error")
})

//import models

import "./modules/user.mjs"
import "./modules/Quotes.mjs"

import resolvers from "./resolver.mjs"



const server=new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({url})=>{
    console.log(`server ready at ${url}`)
})


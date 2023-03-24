// npm install @apollo/server express graphql cors body-parser
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import {makeExecutableSchema} from "@graphql-tools/schema" 
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { json } from 'body-parser';
import typeDefs from './graphql/typeDefs';
import resolvers from "./graphql/resolvers"
import * as dotenv from "dotenv"
import {getSession} from "next-auth/react"
import { GraphQlContext, Session } from './util/types';
import { PrismaClient } from '@prisma/client'




interface MyContext {
  token?: String;
}


async function startApolloServer() {
  dotenv.config()

const app = express();
const httpServer = http.createServer(app);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

const server = new ApolloServer<MyContext>({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const corsOptions = {origin: process.env.CLIENT_ORIGIN, 
  credentials: true,}

  const prisma = new PrismaClient()
await server.start();
app.use(
  '/graphql',
  cors<cors.CorsRequest>(corsOptions),
  json(),
  expressMiddleware(server, {
    context: async function ({ req, res }): Promise<GraphQlContext> {
      const session = await getSession({ req }) as Session;
      console.log(session);
      return { session, prisma };
    },
  }),
);

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
}

startApolloServer().catch(error=>console.log(error))
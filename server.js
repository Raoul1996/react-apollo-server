import express from 'express'
import cors from 'cors'
import {graphiqlExpress, graphqlExpress} from 'graphql-server-express'
import bodyParser from 'body-parser'
import {schema} from './src/schma'

const PORT = 4000

const server = express()
server.use('*', cors({origin: 'http://localhost:3000'}))

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}))
server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))
server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`))

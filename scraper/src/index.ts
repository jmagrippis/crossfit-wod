import express from 'express'

import { auth } from './auth'
import { latestNotPersisted } from './handlers/latestNotPersisted'

const server = express()

server.use(auth)

server.get('/latestNotPersisted', latestNotPersisted)

const port = process.env.PORT

server.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`)
})

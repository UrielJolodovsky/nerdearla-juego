// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import express from 'express'
import { GetChallenges } from './controller/Challenges.js'
import cors from 'cors'

const hostname = "127.0.0.1"
const port = 9000
const app = express()
import bodyParser from 'body-parser'

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.get('/challenge', GetChallenges) 


app.listen(port, () => {
  console.log(`Server running at ${port}`)
})

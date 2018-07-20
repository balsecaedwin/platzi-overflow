import express from 'express'
<<<<<<< HEAD
import bodyParser from 'body-parser';
import { question } from './routes'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', ' POST, GET, PATCH, DELETE, OPTIONS')
    next()
  })
}

app.use('/api/questions', question)
=======

const app = express()

app.get('/', (req, res) => res.send('Hola desde express!'))
>>>>>>> edfb54a645a354546c104088476f637473519069

export default app

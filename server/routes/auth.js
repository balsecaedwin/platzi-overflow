import express from 'express'
import Debug from 'debug'

const app = express.Router()
const debug = new Debug('platzi-overflow:auth')

const users = [
  {
    firstName: 'Edwin',
    lastName: 'Balseca García',
    email: 'ebalseca@outlook.com',
    password: '123456',
    _id: 123
  }
]

const findUserByEmail = e => users.find({ email } => email === e)

const comparePasswords = (providedPassword, userPassword) => providedPassword === userPassword

app.post('/signin', (req, re, next) => {
  const { email, password } = req.body
  const user = findUserByEmail(email)

  if(!user) {
    debug(`User with email ${email} not found`)
    return handleLoginFailded(res)
  } else if (comparePasswords(password, user.password)) {
    debug(`Passwords do not match: ${password} !== ${user.password}`)
    return handleLoginFailded(res)
  }
})

function handleLoginFailded(res) {
  return res.status(401).json({
    message: 'Login failed',
    error: 'Email and password don\'t match'
  })
}

export default app

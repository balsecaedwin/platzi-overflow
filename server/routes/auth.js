import express from 'express'
import Debug from 'debug'
import jwt from 'jsonwebtoken'
import { secret } from '../config'
import { User } from '../models'

const app = express.Router()
const debug = new Debug('platzi-overflow:auth')

const comparePasswords = (providedPassword, userPassword) => providedPassword === userPassword

const createToken = (user) => jwt.sign({ user }, secret, { expiresIn: 86400})

app.post('/signin', async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if(!user) {
    debug(`User with email ${email} not found`)
    return handleLoginFailded(res)
  }

  if (!comparePasswords(password, user.password)) {
    debug(`Passwords do not match: ${password} !== ${user.password}`)
    return handleLoginFailded(res, 'EL correo y la contraseña no coinciden')
  }

  const token = createToken(user)
  res.status(200).json({
    message: 'Login succeded',
    token,
    userId: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  })
})

app.post('/signup', async (req, res) => {
 const { firstName, lastName, email, password } = req.body
 const u = new User({
   firstName,
   lastName,
   email,
   password
 })
 debug(`Creating new user: ${user}`)
 const user = await u.save()
 const token = createToken(user)
 res.status(201).json({
   message: 'User saved',
   token,
   userId: user._id,
   firstName,
   lastName,
   email
 })
})

function handleLoginFailded(res, message) {
  return res.status(401).json({
    message: 'Login failed',
    error: message | 'Email and password don\'t match'
  })
}

export default app

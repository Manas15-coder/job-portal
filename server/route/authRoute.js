import express from 'express'
import { loginController, registerController } from '../controller/authController.js'


const route = express.Router()

route.post('/register',registerController)
route.post('/login',loginController)

export default route
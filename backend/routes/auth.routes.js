import express from "express"
import { login, logout, signup } from "../controller/auth.controller.js"
const router = express.Router()

router.post("/signup", signup)//signup function will be impoerted from the controller or will be in controller

router.post("/login", login)

router.post("/logout", logout)

export default router
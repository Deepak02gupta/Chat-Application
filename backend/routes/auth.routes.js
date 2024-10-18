import express from "express"

const router = express.Router()

router.post("/signup", signup)//signup function will be impoerted from the controller

router.post("/login", login)

router.post("/logout", logout)

export default router
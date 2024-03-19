const express = require("express");
const {CreateUser,loginUser} = require("../controllers/user")

const router = express.Router();

router.get("/" ,(req,res)=>{
    return res.render("home");
})

router.get("/signUp" ,(req,res)=>{
    return res.render("signUp")
})

router.get("/login" ,(req,res)=>{
    return res.render("signIn")
})

router.post("/signUp",CreateUser);
router.post("/login",loginUser);

module.exports = router;
const express = require("express")

const routerUser = express.Router();

routerUser.get("/",(req,res)=>{
    res.send("WELCOME TO USER ROUTER")
})

module.exports= routerUser
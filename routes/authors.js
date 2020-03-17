const express = require("express")
const Author = require('../models/author')
const routerAuthor = express.Router();

routerAuthor.get("/",(req,res)=>{
    res.render('authors/index')
})

routerAuthor.get("/new",(req,res)=>{
    res.render('authors/new',{author : new Author()})
})

routerAuthor.post('/',(req,res)=>{
    res.send('Create')
})

module.exports= routerAuthor
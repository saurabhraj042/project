if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}



const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require('./routes/index')
const UserRouter = require('./routes/user')



app.set('view engine','ejs')
app.set('views',__dirname + "/views")
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/',indexRouter)
app.use('/user',UserRouter)

//setting up database

const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE,{useUnifiedTopology: true,useNewUrlParser : true})
//const db = mongoose.connection
.then(() => console.log('DB Connected!'))
.catch(err => console.error(err));

//db.on('error',error => console.error(error))
//db.once('open',() => console.log("Connected to Mongoose"))

app.listen(process.env.PORT || 3000)

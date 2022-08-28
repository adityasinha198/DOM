
//core module imported
const express=require('express');

//third party package installed and imported


const app=express();
const path = require('path')

const bodyParser=require('body-parser');

const shopRoutes=require('./routes/shop.js');

const adminRoutes=require('./routes/admin.js');

const contact = require('./routes/contact.js')

const success = require('./routes/success')


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);

app.use(shopRoutes);
app.use(contact)
app.use(success)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})


app.listen(3000);
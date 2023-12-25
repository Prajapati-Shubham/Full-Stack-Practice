const express = require('express');
const app=express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride=require("method-override");
const user =require("./models/init");
const port=8080;

app.set("views",path.join(__dirname,"views"));
app.set("view engines","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main().then(()=>console.log("Connection Establisehd with database"))
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/practice");
}

app.listen(port,()=>{
    console.log(`App is listening to ${port}`)
});

app.get("/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/index",(req,res)=>{
    let {name,contact,bio,followers,followings,username,password}=req.body;
    let newUser= new user({
        name:name,
        contact:contact,
        bio:bio,
        followers:followers,
        followings:followings,
        username:username,
        password:password
    });
    newUser
    .save().then(res=>{console.log("User saved")})
    .catch(err=>{console.log(err)});
    // console.log(newUser);
    res.redirect("/")
});

app.get("/",async(req,res)=>{
    let users= await (user.find());
    res.render("main.ejs",{users});
});

app.get("/user/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let users= await user.findById(id)
    // console.log(users)
    res.render("edit.ejs",{users})
});

app.put("/user/:id", async(req,res)=>{
    let {id}=req.params;
    let {bio:newBio}=req.body;
    console.log(newBio);
    let updateBio=await user.findByIdAndUpdate(id,
        { bio:newBio},
        {runValidators:true},{new:true});
        console.log(updateBio);
    res.redirect("/");
});

app.delete("/user/:id",async(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let deletedbio=await user.findByIdAndDelete(id);
    console.log(deletedbio);
    res.redirect("/");
})



const express=require ("express");
let app =express();
const path=require("path");
const port=8080;

app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"public/css")));


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.get("/hello",(req,res)=>{
    res.send("Hello World !");
});
app.get("/rolldice",(req,res)=>{
    let dicevalue=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:dicevalue});
});

app.get("/ig/:username",(req,res)=>{
    const instadata=require ("./data.json");
    // console.log(instadata);
    let {username}=req.params;
    const data=instadata[username];
    console.log(data);
    if (data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs")
    }
    
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});


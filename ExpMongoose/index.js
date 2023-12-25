const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const chat=require("./models/chat.js");
const methodOverride=require("method-override");
const port=8080;

//path to access ejs files
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// database connection established
main().then(() => console.log("Connection Establsihed"))
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//home route
app.get("/",(req,res)=>{
    res.send("server is running");
});

// Index Route 
app.get("/chats",async(req,res)=>{
     let chats= await (chat.find())
    //  console.log(chats);
     res.render("index.ejs",{chats});
});

//new Route
app.get("/chat/new",(req,res)=>{
    res.render("new.ejs");
});

//create route
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newChat= new chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date(),
    });
    newChat
    .save().
    then(res=>{console.log("Chat was saved")})
    .catch(err=>{"Console.log(err)"});
    res.redirect("/chats");
});

//Edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chats= await chat.findById(id);
    res.render("edit.ejs",{chats});
});


//Update Route
app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let {msg:newMsg} =req.body;
    let updatedChat=await chat.findByIdAndUpdate(id,
        {msg:newMsg},
        {runValidators:true,new:true},
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

//destroy route

app.delete("/chats/:id", async (req,res)=>{
    let {id}=req.params;
    let deletedChat= await chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

//server running on port
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
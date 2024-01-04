const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const chat=require("./models/chat.js");
const methodOverride=require("method-override");
const ExpressError=require("./ExpressError.js");
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
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

//home route
app.get("/",(req,res)=>{
    res.send("server is running");
});

// Index Route 
app.get("/chats",async(req,res)=>{
    try{
        let chats= await (chat.find())
    //  console.log(chats);
     res.render("index.ejs",{chats});
    }
    catch(err){
        next(err);
    }
     
});

//new Route
app.get("/chat/new",(req,res)=>{
    // throw new ExpressError(404,"Page Not Found");
    res.render("new.ejs");
});

//create route
app.post("/chats",async(req,res,next)=>{
    try{
        let {from,to,msg}=req.body;
        let newChat= new chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date(),
    });
    await newChat.save()
    res.redirect("/chats");
    }catch(err){
        next(err);
    }
    
});


//Wrap Function to handel the error in express
function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    };
}
//We can Use this asyncWrap() function to all the try catch block

//Show Route 
app.get("/chats/:id", asyncWrap (async(req,res,next)=>{
    
        let {id}=req.params;
        let chats = await chat.findById(id);
        if(!chats){
        next(new ExpressError(500,"Chat Not Found")) ;
        //in async request the express will not call the next() 
        //function bydefault so we have to call the error function as the parameter of
        //the next functiona like the above function.
        }
        res.render("edit.ejs",{chats});
    
        }));

//Edit route
app.get("/chats/:id/edit",async(req,res)=>{
    try{
        let {id}=req.params;
        let chats= await chat.findById(id);
        res.render("edit.ejs",{chats});
    }catch(err){
        next(err);
    }
    
});


//Update Route
app.put("/chats/:id",async(req,res)=>{
    try{
        let {id}=req.params;
        let {msg:newMsg} =req.body;
        let updatedChat=await chat.findByIdAndUpdate(id,
        {msg:newMsg},
        {runValidators:true,new:true},
    );
    console.log(updatedChat);
    res.redirect("/chats");
    }
    catch(err){
        next(err);
    }
    
});

//destroy route

app.delete("/chats/:id", async (req,res)=>{
    try{
        let {id}=req.params;
        let deletedChat= await chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
    
});

//handel Validation Error
const handelValidationError=(err)=>{
    console.log("This is a validation error");
    console.dir(err.message);
    return err;
}

//error middlware
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name==="ValidationError"){
       err= handelValidationError(err);
    }
    next(err);
})

//Error Middleware
app.use((err,req,res,next)=>{
    let {status=500,message="Some error occured"}=err;
    res.status(status).send(message);
})

//server running on port
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
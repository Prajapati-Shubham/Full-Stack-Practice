const express=require("express");
const app= express();
const ExpressError=require("./ExpressError.js");

// app.use((req,res,next)=>{
//     // const {query} = req.query;
//     // console.log(query);
//     console.log("Hii I am 1st MiddleWare");
//     // res.send("Bye");
//     return next(); //After returning the next function the code after that function is not executed
//     console.log("This is after next()");//Not a proper way to write code because next() is end point of any middleware
// });

// app.use((req,res,next)=>{
//    console.log("Hii I am 2nd Middleware");
//     next();
// });

//Only work when the middlewares are initialized before any response send otherwise
//if response is send the middlewaes is noe executed

//Loggers Middlewares
// app.use((req,res,next)=>{
//     req.time= new Date (Date.now()).toString();
//     console.log(req.method ,req.hostname ,req.path ,req.time);
//     next();

// });




const checkToken =(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveAcess"){
        next();
    }
    throw new ExpressError(401,"Access Denied");
};




app.get("/api",checkToken,(req,res)=>{
    res.send("Data");
})


app.get("/err",(req,res)=>{
    abcd==abcd;
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to Admin is forbidden");
})

//error handeling middleware
app.use((err,req,res,next)=>{
    // console.log("-------------ERROR------------");
    let {status=500,message="some errro Occured!"}=err;
    res.status(status).send(message);
    // next(err);//it is compalsary to call the next function with err parameter
    // res.send(err);
});



//error handeling middleware
// app.use((err,req,res,next)=>{
//     console.log("-------------ERROR 2------------");
//     next(err);//it is compalsary to call the next function with err parameter
// });




app.use("/random",(req,res)=>{
    res.send("I am Only for Random");

});

//404
app.use((req,res,)=>{
    res.status(404).send("Page Not Found");
});

app.get("/",(req,res)=>{
    res.send("Hii I am Root ");
})

app.get("/random",(req,res)=>{
    res.send("This is a Random Page");
})

app.listen(8080,()=>{
    console.log("Server is Running on port 8080");
});
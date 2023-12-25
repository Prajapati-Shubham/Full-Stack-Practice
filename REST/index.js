const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const {v4:uuidv4}=require("uuid");
uuidv4(); 
const methodOverride=require("method-override");


app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


let posts=[
    {
        id:uuidv4(),
        username:"Shubham",
        content:"I Love Coding"

    },
    {
        id:uuidv4(),
        username:"Sourabh",
        content:"I Love Skating"

    },
    {
        id:uuidv4(),
        username:"Khushil",
        content:"I Love Dramas"

    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

//to insert a record
app.post("/posts",(req,res)=>{
    // console.log(req.body);
    let {username,content}=req.body;
    let id=uuidv4()
    posts.push({id,username,content});
    res.redirect("/posts");
});

//to show a record
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let post=posts.find((p) => id===p.id);//for finding the specific data from the database
    res.render("show.ejs",{post});  
    // res.send("request is working");
});

//To update a record
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let NewContent=req.body.content;
    let post=posts.find((p) => id===p.id);
    post.content=NewContent;
    console.log(post);
    console.log(id);
    console.log(NewContent);
    res.redirect("/posts");
    console.log("Patch request is working properly");
});

//To Edit a record
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p) =>id===p.id);
    res.render("edit.ejs",{post});
});
//To delete a specific record
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id);
    // res.send("Deleted Sucessfully");
    res.redirect("/posts");

})



app.listen(port,()=>{
    console.log(`Listenig on port ${port}`);
}) ;

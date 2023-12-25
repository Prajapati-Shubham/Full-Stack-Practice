const express=require ("express");
const app=express();
// console.dir(app);
let port=8080;
app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
});

// app.use((req,res)=>{
    // console.log(req);
    // console.log("Request received");
    // res.send({
    //     name:"Apple",
    //     color:"Red"
    // });
    // let code="<h1>fruits</h1><ul><li>apple</li><li>banana</ul>";
    // res.send(code);


// });

app.get("/",(req,res)=>{
    res.send("You contacted root path");
});
// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple path");
// });
// app.get("/orange",(req,res)=>{
//     res.send("You contacted orange path");
// });
// app.get("*" ,(req,res)=>{
//     res.send("This path is not defined")
// });
// app.post("/",(req,res)=>{
//     res.send("You send a post request");
// });
// app.get("/:username/:id",(req,res)=>{
//     let{username,id}=req.params;
    
//     let htmlstr=`<h1>Hello i am root @${username} ,${id}</h1>`;
//     res.send(htmlstr);
// });

app.get("/search",(req,res)=>{
    // console.log(req.query);
    let {q}=req.query;
    if(!q){
        res.send("<h1>Nothing search</h1>")
    }
    res.send(`This are the search result for ${q}`);
    // res.send("No Results");
});
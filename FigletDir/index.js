const figlet =require("figlet");
figlet("Shubham" ,function(err,data){
    if(err){
        console.log("Soemthing went wrong!");
        console.log(err);
        return;
    }
    console.log(data);
});
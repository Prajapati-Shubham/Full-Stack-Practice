const mongoose=require("mongoose");
const chat=require("./models/chat.js");

main().then(() => console.log("Connection Establsihed"))
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
};

let allChats=([
    {
    from:"Rohit",
    to:"Ritesh",
    msg:"Give me your password",
    created_at:new Date()
    },
    {
    from:"shivraj",
    to:"rahul",
    msg:"Hey whatsup!",
    created_at:new Date()
    },
    {
    from:"shubham",
    to:"saxhin",
    msg:"what about the party",            
    created_at:new Date()
    },
    {
    from:"Manoj",
    to:"mahi",
    msg:"Congratulation for the exam",
    created_at:new Date()
    },
    {
    from:"jones",
    to:"nick",
    msg:"Have you seen the new movie",
    created_at:new Date()
    },
    

]);

chat.insertMany(allChats);

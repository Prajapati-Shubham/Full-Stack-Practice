const mongoose=require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/test");

//Code to establish connection to database
main()
.then((res)=>{
    console.log("Connection succesfull");
})
.catch(err=>console.log(err));

//asyncronously made the connection to perform operations
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//User Schema construction
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

//Collection Schema construction
const User=mongoose.model("User",userSchema);
// const Employee=mongoose.model("Employee",userSchema);


//Data insertion single insertion
// const user2=new User({
//     name:"Khushil",
//     email:"Khushil@gmail.com",
//     age:18
// });

// user2.save().then(res=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// Insert many records in the collection
// User.insertMany([
//     {name:"Sourabh",email:"Sourabh@gmail.com",age:20},
//     {name:"Sahil",email:"Sahil@gmail.com",age:25},
//     // {name:"Shivraj",email:"Shivraj@gmail.com",age:21},
//     {name:"Vaibhav",email:"Vaibhav@gmail.com",age:22}
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//to find data in the collection
// User.find().then((res)=>{
//     console.log(res);
// });


//to find all data in the collection using aggregation
// User.find({age:{$gte:20}}).then((res)=>{
//     console.log(res);
// });

//Filter out the data using array
// User.find().then((res)=>{
//     console.log(res[1].name);
// });

//to find a single record in the collection
// User.findOne({age:{$gt:20}}).then((res)=>{
//     console.log(res);
// });

//fetchind records using the id 
// User.findById("6527e62b522eb1707b2ef159").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//Update one records in collection
// User.updateOne({name:"Sahil"},{age:24})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//update many records in collcetion 
// User.updateMany({age:{$gte:25}},{age:24}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//find and update the records in collection
// User.findOneAndUpdate({age:{$gte:25}},{age:24}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// delete one record from Collection
// User.deleteOne({name:"Vaibhav"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//delete many records from the database
// User.deleteMany({age:{$gte:24}})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//find and delete the records in collection

// User.findOneAndDelete({name:"Vaibhav"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//find and delete many records in collection

// User.find().then((res)=>{
//     console.log(res);
// });
// User.findByIdAndDelete("6527e7faf7af4ead29d91012")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


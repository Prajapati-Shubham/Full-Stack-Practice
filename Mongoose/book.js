const mongoose=require("mongoose");

main().then((res)=>{
    console.log("Connection Established");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20,
    },
    author:{
        type:String
    },
    price:{
        type:Number,
        min:[1 ,"Price is too low for sell"],
    },
    discount:{
        type:Number,
        default:0,
    },
    genre:[String],
    category:{
        type:String,
        genre:["fiction","non-fiction","comics"],
    }
});

const book=mongoose.model("book",bookSchema);


// let books1=new book({
//     title:"DC Comics",
//     // author:"Harper Lee",
//     price:10,
//     genre:["fiction","superhero","fiction"],
// });

// books1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


book.findByIdAndUpdate("65283311ea343e42009b0867",{price:-300},{runValidators:true})
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
});
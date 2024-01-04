const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"https://unsplash.com/photos/a-group-of-animals-walking-across-a-grass-covered-field-Nnh4gV8TwlY",
        set:(v)=>
        v===""?
        "https://unsplash.com/photos/a-group-of-animals-walking-across-a-grass-covered-field-Nnh4gV8TwlY"
        :v,
    },
    price:Number,
    location:String,
    country:String
});
const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;
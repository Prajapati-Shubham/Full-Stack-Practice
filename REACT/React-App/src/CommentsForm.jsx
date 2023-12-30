import { useState } from "react"

export default function CommentsForm(){
    let[formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5
    });
    let handelInpuChange=(event)=>{
        setFormData((cuuData)=>{
            return {...cuuData,[event.target.name]:event.target.value};
        })
    }
    let handelSubmit=(event)=>{
        console.log(formData);
        event.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            rating:5
        });
    }
    return(
        <>
        <h2>Give a Comment</h2>
        <form action="" onSubmit={handelSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="Username" id="username"
            value={formData.username} onChange={handelInpuChange} name="username" />
            <br /><br />
            <label htmlFor="remarks">Remarks:</label>
            <textarea name="remarks" id="remarks" cols="20" rows="5" 
            value={formData.remarks} 
            placeholder=" Add Few Remarks" onChange={handelInpuChange}></textarea>
            <br /><br />
            <label htmlFor="rating">Rating:</label>
            <input type="number" placeholder="Rating" id="rating" name="rating"
            min={1} max={5} value={formData.rating} onChange={handelInpuChange}/>
            <br /><br />
            <button>Add Comment</button>
        </form>
        </>
    )
}
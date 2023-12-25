function handelFormSubmit(event){
    event.preventDefault();
    console.log("Form is Submitted");

}

export default function form(){
    return(
        <form onClick={handelFormSubmit}>
            <input type="text" placeholder="Write something" />
            <button >Submit</button>
        </form>
    )

}
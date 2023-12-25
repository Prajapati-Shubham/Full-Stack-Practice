function handelClick(event){
    console.log("Hello !");
    console.log(event);
    
}
function handelMouse(){
    console.log("Bye!");
}
function handelDBClick(){
    console.log("You doubele clicked");
}
export default function Button(){
    return(
        <div>
            <button onClick={handelClick}>Click Me!</button>
            <p onMouseOver={handelMouse}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea inventore deserunt, corporis delectus fuga repudiandae aliquid magnam totam blanditiis consequatur facilis culpa, architecto ipsum provident rerum, voluptatibus quam eligendi id.</p>
            <button onDoubleClick={handelDBClick}>Double Click me!</button>
        </div>
    )
}
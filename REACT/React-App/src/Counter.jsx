import {useState}from "react";

function init(){
    console.log("Init is initiated");
    return Math.random()
}
export default function Counter(){
    let [count ,setCount]=useState(init);
    console.log("Component is re-rendered");
    // console.log(`count=${count}`);
    // let count =0;

    // function inCount(){
    //     count+=1;
    //     console.log(count);
    // }
    let inCount =()=>{
        setCount((currCount)=>{
            return currCount+1;
        });
        // setCount((currCount)=>{
        //     return currCount+1;
        // });
        // setCount(25);
        // console.log(`inside inCount ,Count=${count}`);
    }


    return(
        <div>
            <h3>Count={count}  </h3>
            <button onClick={inCount}>Increase Count</button>
           
        </div>
    )
}


import {useEffect, useState} from "react";
export default function Joker(){
    let [joke,setJoke]=useState({});
    const URL="https://official-joke-api.appspot.com/random_joke";

    const getNewJoke=async()=>{
       let response= await fetch(URL);
       let jsonResponse= await response.json();
       console.log(jsonResponse);
       setJoke({setUp:jsonResponse.setup,punchLine:jsonResponse.punchline});
    }

    useEffect(()=>{
        async function getFirstJoke(){
        let response= await fetch(URL);
       let jsonResponse= await response.json();
       console.log(jsonResponse);
       setJoke({setUp:jsonResponse.setup,punchLine:jsonResponse.punchline});
        }
        getFirstJoke();
    },[])

    return(
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setUp}</h2>
            <h2>{joke.punchLine}</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}
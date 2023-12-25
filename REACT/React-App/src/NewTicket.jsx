import { useState } from "react";
// import "./Lottery.css";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
import GenerateButton from "./GenerateButton";

export default function NewLottey({n=3,winCondition}){
    let [ticket ,setTicket]=useState(genTicket(n));
    let isWinning=winCondition(ticket);

    let buyTicket =()=>{
        setTicket(genTicket(n));
    }
    return(
    <div>
        <h1>Lottery Game</h1>
        <Ticket ticket={ticket}/>
        <GenerateButton action={buyTicket}/>
        <h3>{isWinning && "Congratulation You Won !"}</h3>
    </div>
    )
    
}
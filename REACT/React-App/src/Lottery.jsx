import {useState} from "react";
import "./Lottery.css";
import { genTicket,sum } from "./helper";


export default function Lottery(){
    let [ticket, setTicket]=useState(genTicket(3));
    let isWinnig=sum(ticket)===15;
    let buyTicket=()=>{
       setTicket(genTicket(3))
    }
    
    return (
        <div>        
            <h1>Lottery Game:</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <br />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinnig && "Congratulation ,You Won!"}</h3>
            
        </div>

    );
}
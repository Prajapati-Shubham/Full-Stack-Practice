import { useState } from "react";
export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0,red:0,green:0,yellow:0});
    let [arr,setArr]=useState(["no moves"]);
    let updateBlue = () =>{
        // moves.blue+=1;
        // console.log(`Moves.Blue=${moves.blue}`);
        // setMoves({...moves ,blue:moves.blue+1});
        // setMoves((preMoves)=>{
        //     return {...preMoves, blue:moves.blue+1};
        // });
        // arr.push("blue Moves");
        // setArr([...arr,"blue moves"]);
        setArr((prevArr)=>{
            return [...prevArr,"blue moves"];
        });
        console.log(arr);
    };
        
    let updateYellow = () =>{
        // moves.blue+=1;
        // console.log(`Moves.Blue=${moves.blue}`);
        // setMoves({...moves ,blue:moves.blue+1});
        setMoves((preMoves)=>{
            return {...preMoves, yellow:moves.yellow+1};
        });
    };
    let updateGreen = () =>{
        // moves.blue+=1;
        // console.log(`Moves.Blue=${moves.blue}`);
        // setMoves({...moves ,blue:moves.blue+1});
        setMoves((preMoves)=>{
            return {...preMoves, green:moves.green+1};
        });
    };
    let updateRed = () =>{
        // moves.blue+=1;
        // console.log(`Moves.Blue=${moves.blue}`);
        // setMoves({...moves ,blue:moves.blue+1});
        setMoves((preMoves)=>{
            return {...preMoves, red:moves.red+1};
        });
    };
    return(
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>{arr}</p>
                <p>Blue Moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow Moves={moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p>Green Moves={moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red Moves={moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}
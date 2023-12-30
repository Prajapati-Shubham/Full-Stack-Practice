
import './App.css';
// import Title from './Title.jsx';
// import ProductTab from './ProductTab.jsx';
// import Button from "./Button.jsx";
import Form from "./Form.jsx";
// import MsgBox from  './MsbBox.jsx';
// import Counter from './Counter.jsx'
// import LikeButton from "./LikeButton.jsx";
// import LudoBoard from './LudoBoard.jsx';
import TodoList from "./TodoList.jsx";
import Lottery from "./Lottery.jsx";
import TicketNum from './TicketNum.jsx';
import Ticket from './Ticket.jsx';
import NewTicket from './NewTicket.jsx';
import {sum} from"./helper.js";
import PracticeForm from './PracticeForm.jsx';
import CommentsForm from './CommentsForm.jsx';
import Counter2 from './Counter2.jsx';
import Joker from './Joker.jsx';

function Description(){
  return <h3>I am the description</h3>}

function App() {
  let winCondition=(ticket)=>{
    // return sum(ticket)===15;
    // return ticket.every((num)=>num===ticket[0]);
    return ticket[0]===0;
  }
  return(
    <>
    {/* <h2>Blockbuster Deals | Shop Now</h2> */}
    {/* <MsgBox userName="Shubham" textColor="Red"/>
    <MsgBox userName="Apna College" textColor="blue"/>
    <MsgBox userName="Khushil" textColor="green"/> */}
    {/* <ProductTab/> */}
    {/* <Button/> */}
    {/* <Form/> */}
    {/* <h1>States in React</h1> */}
    {/* <Counter/> */}
    {/* <LikeButton/> */}
    {/*  <LudoBoard/> */}
    {/* <TodoList/> */}
    {/* <Lottery/> */}
    {/* <NewTicket n={3}  winCondition={winCondition}  /> */}
    {/* <PracticeForm/> */}
    {/* <CommentsForm/> */}
    {/* <Counter2/> */}
    <Joker/>
    </>
    
  ) ;
}

export default App;

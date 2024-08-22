import React, { useRef } from 'react';
 import { useState, useEffect } from "react";
 import ReactDOM from "react-dom/client";
 function Counter() {
    const [count, setCount] = useState(0);
     const [calculation, setCalculation] = useState(0);
      const number =useRef(0);
    //  const[number, setNumber]=useState(0);
     useEffect(() => {
       setCalculation(() => count + 1);
     }, [count]); 
      //  useRef(()=>{
      //  setNumber(()=> number*2);
      // },[number]);
       useEffect (()=>{
         number.current=number.current+1;
       } )
       const login=true;
       const greeting=login?<p>welcome to login page</p>:<p>please to the loginpage.</p>;
       const iteams=["Number1","Number2","Number3"]
  
     return (
      
       <>
       <h1> Welcome to reac js</h1>
       <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <br/>
         <button onClick={() => setCount((c) => c - 1)}>-</button>
         <p>Calculation: {calculation}</p>
         <br/>
         {/* { <button onClick={()=> setNumber((n)=> n*2)}>*</button>}
        <p>Number: {number}</p> */}
       
        <br/>
         <input type="text"value={count}onChange={(e) => setCount(e.target.value)}/>

      <h1>Render Number: {number.current}</h1> 
      <p style={{fontSize:"25px",fontFamily:"italic"}}>74+676-23={74+676-23}</p>
      {greeting}
      <ul>
        
        {iteams.map((iteams,index)=>(
        <li key ={index}>{iteams} </li>))}
      </ul>
      </>
     );
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(<Counter />);
export const Header = () => {
   return (
    <div>
       <h1> Welcome to reac js</h1>
        
    </div>

   )
 }









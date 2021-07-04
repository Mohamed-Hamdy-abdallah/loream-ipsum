import React, { useState } from 'react';
import data from './data';
function App() {
  const[count,setCount]=useState(0);
  const[text,setText]=useState([]);

  const click = (event)=>{
    event.preventDefault();
    let counter = parseInt(count);
    let arr = [];
    if (counter <=0)
    {
      setCount(1);
      counter =1;
      alert("Minmum number of text is 1")
   
    }
    if (counter>data.length)
       {
      setCount(data.length);
      counter = data.length;
      alert("Maximum number of text is 9")
       }
    for (let i = 0 ; i<counter ; i++)
    {
    //let random =   Math.floor(Math.random() * (counter-1));
      arr.push(data[i]);
     
    }
    console.log(arr);
    setText(arr);
    
  }
  
  return (
  
  <section className='section-center'>
   <h3>Tired of boring lorem ipsum</h3>
   <form className='lorem-form' onSubmit={(event)=>click(event)}>
     <label htmlFor='amount'>
       paragraphs :
     </label>
     <input type='number' name='amount' id='amount'
     value={count}
     onChange={(event)=>setCount(event.target.value)}
     />
     <button type='submit' className='btn'>Generate</button>
   </form>
   <article className='lorem-text'>
      {text.map((p , index)=>{
      return  <p key = {index}>{p}</p>
      })}
     </article>
  </section>
  )
}

export default App;
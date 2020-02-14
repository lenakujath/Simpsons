import React from 'react';

const  DisplayQuote = props  => (
  
    <div>
      <img
        src={props.photo}
        alt={props.name}
      />
      
        
        <p>
          {props.name}{' '}        
        </p>
        
        <p>
           {props.quote}
     
        </p>
      
      <button onClick={props.action}>Click to get simpsons quote</button>
    </div>
 ) ;



export default DisplayQuote;
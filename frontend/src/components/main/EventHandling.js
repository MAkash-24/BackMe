import React, { useState } from "react";

const EventHandling = () => {

  // let count = 0;

  const [count, setCount] = useState(0);

  const [theme, setTheme] = useState({ backgroundColor: 'white', color: 'black' });

  const addCount = () => {
    // count++; ❌
    setCount(count + 1); // ✅
    console.log(count);
  }

  const enableDarkMode = () => {
      setTheme({ backgroundColor: 'black', color: 'white' })
  };

  const enableLightMode = () => {
    setTheme({ backgroundColor: 'white', color: 'black' })
  };

  return (
    <div style={theme} className="vh-100">
    <div className="container" >

      <button className="btn btn-dark" onClick={enableDarkMode}>Dark Mode</button>
      <button className="btn btn-primary" onClick={enableLightMode}>Light Mode</button>

      <h1>Event Handling</h1>
      <hr />

      <button className="btn btn-primary" onClick={ () => { alert('button was clicked') } } >Click Event Handling</button>

      <input type="text" className="form-control mt-4" onChange={ (e) => { console.log(e.target.value) } }
        onKeyDown={(e) => { if(e.code === 'Space') console.log('space key was pressed') }}
      />

      <button className="btn btn-primary mt-5" onClick={ addCount }>
        <i class="fas fa-thumbs-up"></i>
      </button>
    
      <h1>{count}</h1>
      
    </div>
    </div>
  );
};

export default EventHandling;
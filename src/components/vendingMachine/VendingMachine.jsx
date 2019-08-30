import React, {useState} from 'react';


function VendingMachine() {
  const [count, setCount] = useState(0);

  return <div className='test-wrapper'>
    <h1>Hello, I am test component!</h1>
    <p>{`Count: ${count}`}</p>
    <button
      onClick={() => setCount(count + 1)}
    >Click me!</button>
  </div>
}

export default VendingMachine;
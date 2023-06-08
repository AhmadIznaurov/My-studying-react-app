import React from 'react';
import Message from './Message';

function App() {
    const name = 'John';
    const age = 20;
  return (
      <div>
        <Message name={name} age={age}/>
      </div>
  );
}

export default App;
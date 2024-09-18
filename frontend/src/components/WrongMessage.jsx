import React from 'react';

function WrongMessage({ setWrongRequest }) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <button onClick={() => { setWrongRequest(false) }}> try again</button>
    </div>
  );
}

export default WrongMessage;

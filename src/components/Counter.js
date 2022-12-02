import React, { useState } from 'react';

const Counter = (props) => {
  const [sum, setSum] = useState(props.value);
  const increment = () => {
    setSum(sum + 1);
  };

  return (
    <div>
      {props.children}
      <span className="h5 p-2 text-lg bg-primary text-light">
        {sum === 0 ? 'zero' : sum}
      </span>
      <button className="btn btn-success m-3" onClick={increment}>
        Increment
      </button>
      <button onClick={props.delete}> X </button>
    </div>
  );
};

export default Counter;

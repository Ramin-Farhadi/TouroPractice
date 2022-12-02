import React, { useState } from 'react';
import Counter from './Counter';
const Counters = () => {
  const [state, setState] = useState([
    { id: 1, title: 'counter 1', value: 0 },
    { id: 2, title: 'counter 2', value: 5 },
    { id: 3, title: 'counter 3', value: 10 },
    { id: 4, title: 'counter 4', value: 0 },
  ]);

  const deleteHandler = (counterId) => {
    setState(
      state.filter((s) => {
        return s.id !== counterId;
      })
    );
  };
  return (
    <div>
      {state.map((counter) => {
        return (
          <Counter
            key={counter.id}
            value={counter.value}
            delete={() => deleteHandler(counter.id)}
          >
            <h4>{counter.title}</h4>
          </Counter>
        );
      })}
    </div>
  );
};

export default Counters;

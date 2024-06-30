import React, { useState } from 'react';

const Ex = () => {

    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState({
        name: 'John',
        age: 30
    });

    const [age, setAge] = useState(user.age);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const changeAge = () => {
        setUser({ ...user, age: age });
    }

    return (
        <div>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
          <hr />
    
          <button onClick={() => setVisible(!visible)}>Show</button>
          {visible && <div>Lorem, ipsum dolor.</div>}
          <hr />
    
          <h4>
            {user.name}, {user.age}
          </h4>
          <button onClick={changeAge}>Change age</button>
          <div>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
          </div>
          <hr />
        </div>
      );
}

export default Ex;

import React, { useState } from 'react';
import Count from './Count';
import IsFive from './IsFive';

const Counters = () => {

    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);


    return (

        <div>
            <h1>Counters</h1>

            <div>
                <Count count={count1} id={1}/>
                <button onClick={() => setCount1(count1 + 1)}>Increment</button>
                <button onClick={() => setCount1(count1 - 1)}>Decrement</button>
            </div>

            <div>
                <Count count={count2} id={2} />
                <button onClick={() => setCount2(count2 + 1)}>Increment</button>
                <button onClick={() => setCount2(count2 - 1)}>Decrement</button>

                <IsFive value={count2} />
            </div>


        </div>
    );
}

export default Counters;

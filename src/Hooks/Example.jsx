import React, { useState, useEffect } from 'react';

function Example(){
    const [count, setCount] = useState(0);

useEffect(()=> {document.title=`you pushed ${count} times`});

    return(
        <div>
<p>You pushed the button {count} times</p>
        <button onClick={() => setCount(count+1)}>Push the button!</button>
        </div>
    )
}

export default Example;

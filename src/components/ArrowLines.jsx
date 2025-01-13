import React, { useEffect, useState } from 'react';
import Xarrow from 'react-xarrows';

const ArrowLines = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(setCount(count + 1), 500)
    }, [])
    useEffect(() => {
        console.log(count)
    }, [count]);

  return (
    <div style={{ position: 'relative', padding: '20px' }}>
      <button onClick={()=>setCount(count + 1)}>{count}</button>
      <div id="box1" style={{ width: '100px', height: '100px', backgroundColor: 'lightblue', position: 'absolute', left: '50px', top: '50px' }}>
        Box 1
      </div>
      <div id="box2" style={{ width: '100px', height: '100px', backgroundColor: 'lightcoral', position: 'absolute', left: '200px', top: '150px' }}>
        Box 2
      </div>
      {/* <Xarrow start={"box1"} end={"box2"} /> */}
    </div>
  );
};

export default ArrowLines;


import { useState } from 'react';
import TrackerButton from './TrackerButton';

const VisitorTracker = () => {

    const [count, setCount] = useState(0);
    function addOne() {
        setCount(count + 1);
    }
    function subtractOne() {
        setCount(count > 0 ? count - 1 : count);
    }

  return (
    <>
    <section>
        <TrackerButton label="+" handleClick={addOne} />
        <TrackerButton label="-" handleClick={subtractOne} />
        
        <h3>Total: {count}</h3>
    </section>
    </>
  )
}

export default VisitorTracker;
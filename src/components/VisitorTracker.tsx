
import { useState } from 'react';
import TrackerButton from './TrackerButton';

const VisitorTracker = () => {

    const [count, setCount] = useState(0);
    function addOne() {
        setCount(count + 1);
    }
    function subtractOne() {
        setCount(count - 1);
    }

  return (
    <>
    <section>
        <div className='flex flex-row'>
            <TrackerButton label="+" handleClick={addOne} />
            <TrackerButton label="-" handleClick={subtractOne} isDisabled={count === 0} />
        </div>
        <h3>Total: {count}</h3>
    </section>
    </>
  )
}

export default VisitorTracker;
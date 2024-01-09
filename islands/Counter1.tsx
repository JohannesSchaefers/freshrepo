
// programmed by ChatGPT

import { h, FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

/*

interface CounterProps {
  count: { value: number };
}




const Counter1: FunctionalComponent<CounterProps> = (props: CounterProps) => {
  // Assuming there's a variable named `valueToUpdate` that you want to watch for changes
  let valueToUpdate = 6;

  useEffect(() => {
    // Update props.count.value when the variable valueToUpdate changes
    props.count.value = valueToUpdate;

// Clean up the interval when the component unmounts

}, [valueToUpdate]);

  return (
    <div class="py-6">
      <p class="text-3xl">{props.count.value}</p>
    </div>
  );
};

export default Counter1;


*/


interface CounterProps {
  count: { value: number };
}

const Counter1: FunctionalComponent<CounterProps> = (props: CounterProps) => {
  // Use state to manage the value
  const [valueToUpdate, setValueToUpdate] = useState(6);

  useEffect(() => {
    // Update props.count.value when the variable valueToUpdate changes
    props.count.value = valueToUpdate;

    // Set up an interval to increment the value every 3 seconds
    const intervalId = setInterval(() => {
      // Increment the value by 1 (you can adjust this as needed)
      setValueToUpdate((prevValue) => prevValue + 1);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [valueToUpdate, props.count]);

  console.log(props.count.value);
  return (
    <div class="py-6">
      <p class="text-3xl">{props.count.value}</p>
    </div>
  );
};

export default Counter1;





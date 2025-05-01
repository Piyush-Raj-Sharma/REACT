import { useState } from 'react';
import './App.css';

function App() {
  // In React, we declare variables, functions, conditions, loops, etc., here (above the return block),
  // because everything below (inside return) is JSX — which is just UI structure (like HTML inside JS).

  // useState is a special hook in React that allows a component to hold and manage its own state.
  // It returns an array with two values:
  // 1. The current state variable (here, 'count')
  // 2. A function to update that state (here, 'setCount')

  // We pass an initial value to useState — in this case, 0 — which becomes the starting value of 'count'.
  // You can name the state variable and update function anything, like [x, setX], but using meaningful names is a best practice.
  let [count, setCount] = useState(0);

  // Previously, we might use a normal variable like 'let count = 0;',
  // but this wouldn't update the UI when changed — because React doesn't automatically re-render on variable changes.
  // React only updates the UI when we use 'setCount()' (the updater function returned by useState).
  // That's why we say React "reacts" to state changes — and this is why useState is important.

  // For example:
  // let count = 0;
  // count++;        ✅ increases the value
  // But React won’t reflect this on UI ❌ because no state change was triggered.
  // setCount(count + 1); ✅ This will reflect on the UI properly.

  // You can also think of useState like an "accumulator" in a reduce() function — it holds evolving values over time.

  // Increment Function
  let incrementCounter = () => {
    // Option 1 (commented): you can increment while passing directly: setCount(++count);
    // But here we first increment the local value, then update the state.

    // We’re adding a condition to limit the counter to a maximum of 20.
    if (count < 20) {
      count += 1;         // increase the local value
      setCount(count);    // update the state, which triggers UI update
    }
  };

  // Decrement Function
  let decrementCounter = () => {
    // Only decrement if count is above 0 — this prevents it from going negative.
    if (count > 0) {
      count -= 1;
      setCount(count); // reflect updated count on UI
    }
  };

  return (
    <>
      <h1>Re_Starting React : Will do it</h1>

      {/* This displays the current counter value */}
      {/* In JSX, anything inside curly braces like {count} is an EVALUATED EXPRESSION. 
          It means you can use variables, function calls, or math operations — but NOT full statements like loops or conditions. */}
      <h2>COUNTER : {count}</h2>

      <br />
      {/* onClick is an event handler — when the button is clicked, incrementCounter() runs */}
      <button onClick={incrementCounter}>Count++</button>
      <br /><br />

      <button onClick={decrementCounter}>Count--</button>

      {/* This line shows another way to use the same state value anywhere in JSX.
          With React, we don’t need to manually use document.querySelector() to insert text. 
          Once we update the state (using setCount), React automatically updates the UI everywhere 'count' is used. */}
      <p>The current value of your counter is: {count}</p>
    </>
  );
}

export default App;

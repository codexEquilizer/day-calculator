import { useState } from "react";

function App() {
  return (
    <div className="App container">
      <h1>My Day Calculator</h1>
      <DayCalc />
    </div>
  );
}

function DayCalc() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <br />
      <div>
        <button disabled={step === 0} onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <span>Count: {count}</span>
        <button disabled={step === 0} onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} ${count > 1 ? "days" : "day"} from today is `
            : `${Math.abs(count)} ${count < -1 ? "days" : "day"} ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      <button disabled={step === 1 && count === 0} onClick={reset}>
        Reset
      </button>
    </div>
  );

  function reset() {
    setStep((s) => (s = 1));
    setCount((c) => (c = 0));
  }
}

export default App;

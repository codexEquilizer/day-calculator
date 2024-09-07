import { useState } from "react";

function App() {
  return (
    <div className="App container">
      <h1>My Day Calculator</h1>
      <h4>Using Controlled Element Technique</h4>
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
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>Step: {step}</span>
      </div>
      <br />
      <div>
        <button
          disabled={step === 0}
          onClick={() => setCount((count) => count - step)}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button
          disabled={step === 0}
          onClick={() => setCount((count) => count + step)}
        >
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

      {step === 1 && count === 0 ? (
        ""
      ) : (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );

  function handleReset() {
    setStep((s) => (s = 1));
    setCount((c) => (c = 0));
  }
}

export default App;

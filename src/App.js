import { useEffect, useState } from "react";
export default function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0)
  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount(count + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You are on a <strong>{props.count}</strong> advice count
    </p>
  )
}

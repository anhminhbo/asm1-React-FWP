import CountDown from "./components/Countdown";
import { useState } from "react";
function App() {
  const [minute, setMinute] = useState("01");
  const [second, setSecond] = useState("59");

  return (
    <div className="container">
      <CountDown
        minute={minute}
        second={second}
        setMinute={setMinute}
        setSecond={setSecond}
      />
    </div>
  );
}

export default App;

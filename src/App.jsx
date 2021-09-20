import { useState } from "react";
import "./App.css";

const App = () => {
  const [usd, setUsd] = useState("");
  const [btc, setBtc] = useState("");

  const exchange = (curr) => (event) => {
    // Declared rate inside function for better scope
    const rate = 500;
    const amount_value = event.target.value;
    if (curr === "usd") {
      setUsd(amount_value);
      setBtc(amount_value * rate);
    } else {
      setBtc(amount_value);
      setUsd(amount_value / rate);
    }
  };

  return (
    <>
      <div className="form">
        <div>
          <h4>USD</h4>
          <input
            type="text"
            name="usd"
            value={usd}
            placeholder="0.0"
            className="input__padding"
            autoComplete="off"
            onChange={exchange("usd")}
          />
        </div>
        <div>
          <h4>BTC</h4>
          <input
            type="text"
            className="input__padding"
            name="btc"
            value={btc}
            placeholder="0.0"
            autoComplete="off"
            onChange={exchange("btc")}
          />
        </div>
      </div>
    </>
  );
};

export default App;

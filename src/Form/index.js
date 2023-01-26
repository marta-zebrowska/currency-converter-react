import "./style.css";
import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);
  const [result, setResult] = useState("");

  const calculateResult = (amount, currency) => {
    const { rate } = currencies.find(({ short }) => short === currency);

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <p>
          <label>
            {" "}
            <span className="form__labelText">Kwota:</span>
            <input
              className="form__field"
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              required
              type="number"
              min="1"
              step="any"
              placeholder="PLN"
            />
          </label>
        </p>
        <p>
          <label>
            {" "}
            <span className="form__labelText">Waluta:</span>
            <select
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.short}
                </option>
              ))}
            </select>
          </label>
        </p>
      </fieldset>
      <p>
        <button className="form__button" type="submit">
          Przelicz
        </button>
      </p>
      <Result result={result} />
    </form>
  );
};

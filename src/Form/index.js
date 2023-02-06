import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";
import { Clock } from "./Clock";
import { StyledFieldset, Legend, Label, Field, StyledButton } from "./styled";


const Form = () => {
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
    <form onSubmit={onFormSubmit}>
      <StyledFieldset>
        <Legend>Kalkulator walut</Legend>
        <Clock />
        <p>
          <label>
            {" "}
            <Label>Kwota:</Label>
            <Field
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
            <Label>Waluta:</Label>
            <Field
              as="select"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.short}
                </option>
              ))}
            </Field>
          </label>
        </p>
      </StyledFieldset>    
      <StyledButton>Przelicz</StyledButton>
      <Result result={result} />
    </form>
  );
};

export default Form;
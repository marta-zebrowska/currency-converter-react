import { useState } from "react";
import { Result } from "./Result";
import { Clock } from "./Clock";
import {
  StyledFieldset,
  Legend,
  Label,
  Field,
  StyledButton,
  Loading,
  StyledError,
  Info,
} from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState("");
  const ratesData = useRatesData();

  const calculateResult = (amount, currency) => {
    const rate = ratesData.rates[currency];

    setResult({
      amount: +amount,
      resultValue: amount * rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form onSubmit={onFormSubmit}>
      {ratesData.state === "loading" ? (
        <Loading>
          Uno momento por favor... <br /> Właśnie ładuję kursy z Europejskiego
          Banku Centralnego...
        </Loading>
      ) : ratesData.state === "error" ? (
        <StyledError>
          Ups... coś poszło nie tak 😐 <br />
          Sprawdź czy masz połączenie z internetem i odśwież stronę
          przeglądarki. <br />
          Jeśli to nie pomoże, postaramy się jak najszybciej naprawić błąd.
        </StyledError>
      ) : (
        <>
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
                  {Object.keys(ratesData.rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </Field>
              </label>
            </p>
          </StyledFieldset>
          <StyledButton>Przelicz</StyledButton>
          <Result result={result} />
          <Info>Kursy walut pobierane są z Europejskiego Banku Centralnego.<br />Aktualne na dzień: {ratesData.date}</Info>
        </>
      )}
    </form>
  );
};

export default Form;
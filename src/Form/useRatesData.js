import axios from "axios";
import { useState, useEffect } from "react";

export const useRates = () => {
  const [rates, setRates] = useState({
    state: "loading",
  });

  useEffect(() => {
    const getRates = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=PLN"
        );

        setRates({
          state: "success",
          rates: response.data.rates,
          date: response.data.date,
        });
      } catch {
        setRates({
          state: "error",
        });
      }
    };

    setTimeout(getRates, 2000);
  }, []);

  return rates;
};

import axios from "axios";
import { useState, useEffect } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const getRatesData = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=PLN"
        );

        setRatesData({
          state: "success",
          rates: response.data.rates,
          date: response.data.date,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(getRatesData, 2000);
  }, []);

  return ratesData;
};
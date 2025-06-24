import { useState, useEffect } from "react";

// Define the type for the response data
type CurrencyData = {
  [key: string]: number;
};

function useCurrencyInfo(currency: string): CurrencyData | null {
  const [data, setData] = useState<CurrencyData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const result = await res.json();
        setData(result[currency]);
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setData(null);
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

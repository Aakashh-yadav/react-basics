import { useState, useEffect } from "react";

function useCurrencyinfo(currency) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_KkmM3ak32v2mliu6GV2CQnatLQ4x9nIfbf0oSj9k&currencies=EUR%2CUSD%2CCAD&base_currency=${currency}`, {
            signal: abortController.signal,
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((res) => {
                console.log("API Response:", res); // Log the full response for debugging
                if (res.data) {
                    setData(res.data); // Set the data from the correct response structure
                } else {
                    throw new Error("Invalid API response structure");
                }
            })
            .catch((error) => {
                if (error.name !== "AbortError") {
                    console.error("Error fetching currency data:", error);
                    setError(error.message);
                }
            });

        return () => abortController.abort(); // Cleanup on unmount
    }, [currency]);

    useEffect(() => {
        console.log("Currency Data:", data); // Log the updated data
    }, [data]);

    return { data, error };
}

export default useCurrencyinfo;
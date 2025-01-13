import { useState, useEffect } from "react";

function useCurrencyinfo(currency) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(`http://data.fixer.io/api/latest?access_key=9cd5336d6156fea870a62d440d981b00&symbols=USD,EUR,CAD&base=EUR`, {
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
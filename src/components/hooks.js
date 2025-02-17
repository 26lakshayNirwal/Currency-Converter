import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
    
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setData(data.rates); 
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []); 

    return data;
}

export default useCurrencyInfo;

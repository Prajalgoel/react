import { useEffect, useState } from "react";

function useCurrencyInfo(currrency){
    const [data,setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currrency}.json`)
        .then((response) => response.json() )
        .then((response) => setData(response[currrency]))
        console.log(data);
        
    }, [currrency])
    return data
}

export default useCurrencyInfo;
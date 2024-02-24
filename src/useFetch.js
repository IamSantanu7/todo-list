import { useState, useEffect } from "react";

// It is our Custom Hook
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("unable to fetch data for that resource.");
                }
                return res.json();
            })
            .then(list => {
                // console.log(list);
                setData(list);
                setIsPending(false);
            })
            // Handling fetch errors
            .catch((err) => {
                setIsPending(false);
                setError(err.message);
                setError(null);
            });
        }, 1000);
    },[url]);

    return {data, isPending, error}
}

export default useFetch;
import {useEffect, useState} from "react";
import { makeRequest } from "../lib/makeRequest";



const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const res = await makeRequest.get(url)

                setData(res.data.data)
            }catch(err){
                setError(true);
            }
            setTimeout(() => setLoading(false), 3000)
        }
        fetchData()
    }, [url])

    // console.log(data);

    return {data, loading, error };
}

export default  useFetch;
import { useEffect, useState } from 'react';
import axios from 'axios';

type Error = {
    message: string;
}

// TODO: pouzit fetch namiesto axios

function useFetch(url: string) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        (async function () {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;

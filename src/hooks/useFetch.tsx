import { useEffect, useState } from 'react';
import axios from 'axios';

interface Error {
    message: string;
}

function useFetch(url: string) {
    const [data, setData] = useState('');
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

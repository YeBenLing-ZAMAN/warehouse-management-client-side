import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            console.log(user);
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://mysterious-scrubland-93327.herokuapp.com/login', { email });
                setToken(data.accesstoken);
                localStorage.setItem('accessToken', data.accesstoken);
            }
        }
        getToken();
    }, [user]);
    return [token];
}

export default useToken;
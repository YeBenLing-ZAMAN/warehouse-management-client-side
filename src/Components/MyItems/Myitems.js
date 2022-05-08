import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myitems = () => {
    const [user] = useAuthState(auth);
    const [myitems, setOrders] = useState([]);
    useEffect(() => {

        const getorders = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/myitmes?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrders(data);
            } catch (error) {
                console.log(error.message);
                if (error.response?.status === 401 || error.response?.status === 403) {
                    signOut(auth);
                    navigator('/login');
                }
            }
        }
        getorders();

    }, [user]);

    return (
        <div style={{"minHeight":"90vh"}} className='w-50 mx-auto'>
            <h2  className='text-center text-danger'>Your add items : {myitems.length}</h2>
            {
                myitems.map(item =>
                    <div key={item._id}>
                        <p>{item.email} : {item?.service}</p>
                    </div>
                )
            }

        </div>
    );
};

export default Myitems;
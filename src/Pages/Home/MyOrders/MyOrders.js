import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import './MyOrders.css';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const email = user?.email
        const url = `http://localhost:5000/myOrders?email=${email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user])


    console.log(orders)
    return (
        <div className='my-orders'>
            <h1>my orders {orders.length}</h1>
        </div>
    );
};

export default MyOrders;
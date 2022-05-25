import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const ManageAllOrders = () => {
    const {data, isLoading} = useQuery('orders', () =>
     fetch('http://localhost:5000/orders').then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='manage-all-orders'>
            <h1>all orders {data?.length}</h1>
        </div>
    );
};

export default ManageAllOrders;
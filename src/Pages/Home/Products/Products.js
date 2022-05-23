import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='products grid lg:flex px-12 my-12 gap-5'>
            {
                products.map(product => <Product product = {product} key={product._id}></Product>)
            }
        </div>
    );
};

export default Products;
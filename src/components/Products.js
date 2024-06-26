import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

function Products() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const handleAdd = (product) => {
        dispatch(add(product));
    }

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get('https://fakestoreapi.com/products');
            setProducts(res.data);
        }
        getProducts();
    }, []);

    return (
        <div>
            <div className='ProductsWrapper'>
                {products.map((product) => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt={`${product.title} image`} />
                        <h6>{product.title}</h6>
                        <h5>{product.price}</h5>
                        <button onClick={() => handleAdd(product)} className="btn">Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;

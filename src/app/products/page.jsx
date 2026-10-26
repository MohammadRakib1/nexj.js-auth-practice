import Product from '@/components/Product';
import React from 'react';



const ProductsPage = async () => {

    const res = await fetch('http://localhost:5000/products', { next: { revalidate: 20 } });
    const products = await res.json();

    return (
        <div>
            <h2>Products: {products.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
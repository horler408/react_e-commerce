import React, { useState, useEffect } from 'react';

import Product from '../product/Product';
import Loading from '../commons/Loading';

const Products = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchedProducts = async () => {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products');
      const resJson = await res.clone().json();
      const resJason1 = await res.json();
      setData(resJson);
      setProducts(resJason1);
      setLoading(false);
      // console.log(products);
    };

    fetchedProducts();
  }, []);

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Featured Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading && <Loading />}

          <Product products={products} data={data} setProducts={setProducts} />
        </div>
      </div>
    </div>
  );
};

export default Products;

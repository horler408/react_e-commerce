import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({ products, data, setProducts }) => {
  const filteredProducts = (category) => {
    const updatedList = data.filter((x) => x.category === category);
    setProducts(updatedList);
  };

  return (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => setProducts(data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filteredProducts("men's clothing")}
        >
          Men's Stuff
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filteredProducts("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filteredProducts('jewelery')}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filteredProducts('electronics')}
        >
          Electronics
        </button>
      </div>
      {products.map((product) => (
        <>
          <div className="col-md-3 mb-4">
            <div className="card h-100 text-center p-4">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {product.title.substring(0, 10)}...
                </h5>
                <p className="card-text lead fw-bold">$ {product.price}</p>
                <NavLink
                  to={`/products/${product.id}`}
                  className="btn btn-outline-dark"
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Product;

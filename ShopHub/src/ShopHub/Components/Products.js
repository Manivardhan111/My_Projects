import React, { useEffect } from "react";
// import "/src/App.css"

import { useDispatch, useSelector } from "react-redux";

import { fetchCart, getAllProducts } from "../Redux/Action/Action";
import { toast, ToastContainer } from "react-toastify";

const Products = () => {
  const productLog = useSelector((state) => state.Products);
  const Toast = () => {
    toast("Product Added Successfully", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      theme: "light",
      type: "success",
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      <div className="text-center fs-3 fw-bold">
        <h1>
          <em>
            <u>Products</u>
          </em>
        </h1>
        <hr />
      </div>
      <div className="cotainer">
        <div className="row justify-content-center ">
          {productLog.map((product) => (
            <div
              className="card shadow col-4 p-3  bg-light rounded align-items-center mx-1 pb-0 px-3 fa fs-3 my-3"
              key={product.id}
              style={{ width: "22rem", height: "35rem" }}
            >
              <img
                className="card-img-top align-items-center col-3 pt-3 px-2 card-image-top"
                style={{ height: "18rem" }}
                src={product.image}
                alt="product"
              />
              <div className="m-auto h-25">
                <p>{product.title.substring(0, 20)}</p>
                <p className="card-text fs-4">
                  {product.description.substring(0, 50)}
                </p>
              </div>
              <b className="fa fa-inr ">{product.price}</b>
              <div className="py-3 text-center fixed">
                <button
                  onClick={() => {
                    dispatch(fetchCart(product.id));
                    Toast();
                  }}
                  className="btn btn-primary py-2 position mb-3"
                >
                  ADD TO CART
                </button>
              </div>
              {/* <div className="text-center m-auto mb-0"> <button className="btn btn-primary text-center m-50">het</button></div> */}
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Products;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {
  incrementQty,
  decreamentQty,
  deleteFromCart,
} from "../Redux/Action/Action";

const Cart = () => {
  const cartState = useSelector((state) => state.Cart);

  const dispatch = useDispatch();
  const deleteItm = () => {
    toast("Item Deleted Sucessfully!", { autoClose: 150 });
  };
  const qtyToastDec = () => {
    toast("Quantity Decreased", {
      type: "error",
      hideProgressBar: true,
      autoClose: 150,
    });
  };
  const qtyToastInc = () => {
    toast("Quantity Increased", {
      type: "success",
      hideProgressBar: true,
      autoClose: 150,
    });
  };

  return (
    <div className="align-items-center">
      <div className="text-center fs-1 pt-3 fw-bold">SHOPPING CART</div>
      <hr />
      <div className="container align-items-center">
        {cartState.map((product) => (
          <div className="product col-10 m-auto mb-5" key={product.id}>
            <div className="title  fs-1 fw-bold px-5 text-center  mx-5">
              {product.title.substring(0, 36)}
            </div>
            <hr />

            <div className="row">
              <div className="py-3 align-items-center col-3">
                <img
                  className="cardImg m-auto"
                  src={product.image}
                  alt="product_title"
                  style={{ height: "25rem", width: "20rem" }}
                ></img>
              </div>

              <div className="col-md-7 pt-3 align-items-center">
                <div className="px-3 text-center">
                  <p className="fw-bold  fs-5">{product.description}</p>

                  <section className="mb-3 align-items-center">
                    <b className=" fs-3 mx-5">
                      Total:&nbsp;&nbsp;
                      <i className="fa fa-inr fs-3">
                        &nbsp;{Math.floor(product.price * product.qty)}
                      </i>
                    </b>
                    <br />
                    <div className="d-flex px-5 justify-content-center ">
                      {product.qty > 1 ? (
                        <button
                          className="mx-3 py-1 btn btn-primary"
                          onClick={() => {
                            dispatch(decreamentQty(product.id));
                            qtyToastDec();
                          }}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                      ) : (
                        <button className="mx-3 py-1 btn btn-primary">
                          <i className="fa fa-minus"></i>
                        </button>
                      )}
                      <b className="fs-3">
                        Qty:<i className="fa"> &nbsp;{product.qty}</i>
                      </b>
                      <br />
                      <button
                        className="mx-3 btn btn-primary"
                        onClick={() => {
                          dispatch(incrementQty(product.id));
                          qtyToastInc();
                        }}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </section>

                  <button
                    className="text-white px-4 mx-5 btn btn-danger mb-3"
                    onClick={() => {
                      dispatch(deleteFromCart(product.id));
                      deleteItm();
                    }}
                  >
                    <i className="fa fa-trash mx-2 "></i>Delete Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};
export default Cart;

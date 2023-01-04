import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <>
      <div className="container mt-3 mt-md-5">
        <h2 className="text-charcoal hidden-sm-down">Your Orders</h2>
        <div className="row">
          <div className="col-12">
            <div className="list-group mb-5">
              <div
                className="list-group-item p-3 bg-snow"
                style={{ position: "relative" }}
              >
                <div className="row w-100 no-gutters">
                  <div className="col-6 col-md">
                    <h6 className="text-charcoal mb-0 w-100">Order Number</h6>
                    <Link
                      href="#"
                      className="text-pebble mb-0 w-100 mb-2 mb-md-0"
                    >
                      #A915AFLE4FO
                    </Link>
                  </div>
                  <div className="col-6 col-md">
                    <h6 className="text-charcoal mb-0 w-100">Date</h6>
                    <p className="text-pebble mb-0 w-100 mb-2 mb-md-0">
                      Feb 9th, 2023
                    </p>
                  </div>
                  <div className="col-6 col-md">
                    <h6 className="text-charcoal mb-0 w-100">Total</h6>
                    <p className="text-pebble mb-0 w-100 mb-2 mb-md-0">
                      $19.54
                    </p>
                  </div>
                  <div className="col-6 col-md">
                    <h6 className="text-charcoal mb-0 w-100">Status</h6>
                    <p className="text-pebble mb-0 w-100 mb-2 mb-md-0 text-danger">
                      Pending
                    </p>
                  </div>
                  <div className="col-12 col-md-3">
                    <Link href="#" className="btn btn-primary w-100">
                      View Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;

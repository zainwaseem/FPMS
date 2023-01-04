import React from "react";
import "./Material.css";
// import { AiOutlineDelete } from 'react-icons/ai';
const Material = () => {
  return (
    <>
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div id="saleOrder" className="col-sm-offset-5">
                <h2>
                  New <b>Purchase Material</b>
                </h2>
              </div>
              <div
                id="saleReturn"
                className="col-sm-offset-5"
                style={{ display: "none" }}
              >
                <h2>
                  Purchase <b>Return</b>
                </h2>
              </div>
            </div>
            <input
              type="hidden"
              className="PurchaseOrder.PurchaseReturn"
              id="purchaseReturn"
              value="false"
            ></input>
            <input
              type="hidden"
              className="PurchaseOrder.SupplierId"
              id="idnSupplier"
              value="59"
            ></input>
            <div className="row">
              <div className="col-sm-6">
                <h5>
                  <b>Supplier Name</b>
                </h5>
                <input
                  type="text"
                  className="form-control ui-autocomplete-input"
                  name="Supplier.Name"
                  id="supplier"
                  value=""
                  placeholder="Type supplier name"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Type supplier name"
                ></input>
              </div>

              <div className="col-sm-6">
                <h5>
                  <b>Address</b>
                </h5>
                <input
                  type="text"
                  // autocomplete="on"
                  className="form-control"
                  name="Supplier.Address"
                  id="supplierAddress"
                  tabindex="-1"
                ></input>{" "}
              </div>
            </div>
          </div>

          <table id="selectedProducts" className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Product Category</th>
                <th style={{ width: "20%" }}>Material Name</th>
                <th>Purchase Price</th>
                <th>Quantity</th>
                <th style={{ width: "20%" }}>Total Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select
                    name=""
                    id=""
                    className="form-control border-1 mt-1 p-1"
                  >
                    <option className="mt-5" selected>
                      <b>Select Category</b>
                    </option>
                    <option>Cycle Gloves</option>
                    <option>Gym Gloves</option>
                    <option>Fitness Gloves</option>
                    <option>Motorbike Gloves</option>
                  </select>
                </td>
                <td>
                  <select
                    name=""
                    id=""
                    className="form-control border-1 mt-1 p-1"
                  >
                    <option className="mt-5" multiple>
                      <b>Select Material</b>
                    </option>
                    <option>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      ></input>
                    </option>
                  </select>
                </td>
                {/* <td><input type="text" autocomplete="off" className="form-control ui-autocomplete-input" name="name0" id="name0" placeholder="Type product name" data-toggle="tooltip" data-placement="top" title="Type product name"></input></td> */}

                <td>
                  <input
                    type="number"
                    // autocomplete="off"
                    className="form-control classBGcolor"
                    name="PurchaseOrderDetail[0].PurchasePrice"
                    id="purchasePrice0"
                  ></input>
                </td>
                <td>
                  <input
                    type="number"
                    // autocomplete="off"
                    className="form-control"
                    name="PurchaseOrderDetail[0].Quantity"
                    id="quantity0"
                  ></input>
                </td>
                <td>
                  <td>
                    <input
                      type="number"
                      className="form-control ui-autocomplete-input"
                      name="PurchaseOrderDetail.Index"
                      placeholder="Length in meters"
                    ></input>
                  </td>
                </td>
              </tr>
            </tbody>
          </table>

          <br></br>
          <tbody>
            <tr id="rOrderTotal">
              <td>
                <h3 id="price">Total Price</h3>
              </td>
            </tr>
            <tr id="rOrderTotal">
              <td>
                <input
                  type="text"
                  readOnly
                  className="form-control classBorder0"
                  name="gt5"
                  id="gt5"
                  tabindex="-1"
                ></input>
              </td>
            </tr>
          </tbody>
        </div>
      </div>
    </>
  );
};

export default Material;

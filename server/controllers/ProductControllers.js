import Product from "../models/ProductModel.js";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";

const AddProduct = async (req, res, next) => {
  try {
    let { title, desc, img, price, size } = req.body;

    if (!title || !desc || !img || !price || !size) {
      return res.json({
        message: "Please provide all details of the product",
      });
    }

    const existProduct = await Product.findOne({ title });
    // if (existProduct) {
    //   return res.json({ message: "Product already exists" });
    // }
    // cloudinary
    let result = await cloudinary.uploader.upload(img, {
      folder: "products",
    });
    img = {
      public_id: result.public_id,
      // img = result.secure_url;
      secure_url: result.secure_url,
    };

    const newProduct = new Product({
      title,
      desc,
      img,
      price,
      size,
    });
    await newProduct.save();
    return res.status(200).json({
      message: "Product added successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getALLProducts = async (req, res) => {
  try {
    const Products = await Product.find();
    return res.json(Products);
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const singleProduct = await Product.findById(req.params.id);
    return res.json(singleProduct);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  const { title, desc, img, price, size } = req.body;

  try {
    await Product.findByIdAndUpdate(req.params.id, {
      title,
      desc,
      img,
      price,
      size,
    });
    return res.json({ message: `Product has been updated` });
  } catch (error) {
    next(error);
  }
};
const deleteProduct = async (req, res, next) => {
  // const { _id } = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ message: "Not found" });
  }

  try {
    const daletedProduct = await Product.findByIdAndDelete(req.params.id);
    console.log(daletedProduct);
    return res.json({ message: `Product has been deleted` });
  } catch (error) {
    next(error);
  }
};

export { AddProduct, getProduct, getALLProducts, deleteProduct, updateProduct };

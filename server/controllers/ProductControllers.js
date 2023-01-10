import Product from '../models/ProductModel.js'
import { v2 as cloudinary } from 'cloudinary'
import mongoose from 'mongoose'

const AddProduct = async (req, res, next) => {
  try {
    let { title, desc, img, price, size } = req.body

    if (!title || !desc || !img || !price || !size) {
      return res.status(401).json({
        message: 'Please provide all details of the product',
      })
    }

    const existProduct = await Product.findOne({ title })
    if (existProduct) {
      return res.json({ message: 'Product already exists' })
    }
    // cloudinary
    const result = await cloudinary.uploader.upload(img, {
      folder: 'products',
    })
    // console.log(result);
    img = {
      public_id: result.public_id,
      secure_url: result.secure_url,
    }
    console.log(img)
    const newProduct = new Product({
      title,
      desc,
      img,
      price,
      size,
    })
    await newProduct.save()
    return res.status(200).json({
      message: 'Product added successfully',
    })
  } catch (error) {
    next(error)
  }
}

const getALLProducts = async (req, res) => {
  try {
    const Products = await Product.find()
    return res.json(Products)
  } catch (error) {
    next(error)
  }
}

const getProduct = async (req, res, next) => {
  try {
    const singleProduct = await Product.findById(req.params.id)
    return res.json(singleProduct)
  } catch (error) {
    next(error)
  }
}

const updateProduct = async (req, res, next) => {
  const { title, desc, img, price, size } = req.body

  try {
    await Product.findByIdAndUpdate(req.params.id, {
      title,
      desc,
      img,
      price,
      size,
    })
    return res.json({ message: `Product has been updated` })
  } catch (error) {
    next(error)
  }
}
const deleteProduct = async (req, res, next) => {
  // const { _id } = req.params.id;
  // if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
  //   return res.status(404).json({ message: "Not found" });
  // }
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.json({ message: 'id is not valid' })
  }

  try {
    const daletedProduct = await Product.findByIdAndDelete(req.params.id)
    return res.json({ message: `Product has been deleted` })
  } catch (error) {
    next(error)
  }
}

export { AddProduct, getProduct, getALLProducts, deleteProduct, updateProduct }

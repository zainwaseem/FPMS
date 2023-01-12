import express from 'express'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/userRoutes.js'
import employeeRoutes from './routes/EmployeeRoutes.js'
import productRoutes from './routes/ProductRoutes.js'
import cors from 'cors'
const app = express()
app.use(express.json({ limit: '50mb' }))
// app.use(express.urlencoded({ limit: "50mb" }));

import { v2 as cloudinary } from 'cloudinary'
cloudinary.config({
  cloud_name: 'dlf1jfgzk',
  api_key: '137343997832747',
  api_secret: 'f4C1Mhxz1n7ItBmGvPjTF9oXz6M',
})

const corsOptions = {
  origin: 'http://localhost:3000',
  // origin: "*",
  credentials: true, //access-control-allow-credentials:true
  // optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(cookieParser())
connectDB()

// Error Handling
app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || 'something went wrong!'

  return res.status(status).json({
    success: false,
    status,
    message,
  })
})

//Routes
app.use('/', userRoutes) //Authentication Zain && User routes Taqasur
app.use('/', employeeRoutes) //Haseeb
app.use('/', productRoutes) //Zain Waseem
// Creating Express Server
// const port = process.env.PORT || 5000;
const port = 5000
app.listen(port, () => console.log(`Server running on port ${port}`))

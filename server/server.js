import express from "express";

import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import employeeRoutes from "./routes/EmployeeRoutes.js";
import cors from "cors";
import products from "./products.js";
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  // origin: "*",
  credentials: true, //access-control-allow-credentials:true
  // optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());
connectDB();

// Error Handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.status || "something went wrong!";

  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

//Routes
app.use("/", userRoutes);
app.use("/", employeeRoutes);
app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

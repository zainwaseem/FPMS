import express from "express";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import employeeRoutes from "./routes/EmployeeRoutes.js";
import cors from "cors";
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


//Routes
app.use("/", userRoutes);
app.use("/", employeeRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

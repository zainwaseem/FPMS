import cookieParser from "cookie-parser";
import express from "express";
const app = express();

app.use(express.json());
app.use(cookieParser());
// app.use(express());
import connectDB from "./config/db.js";
connectDB();

// import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// app.use((err, req, res, next) => {
//   res.json({
//     error: err.stack,
//   });
// });

app.use("/", userRoutes);
// app.use("/products", productRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

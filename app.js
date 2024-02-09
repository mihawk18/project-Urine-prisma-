require('dotenv').config();
const express = require("express");
const cors = require("cors");
const notFound = require("./middlewares/notFound"); 
const errorMiddlewares = require("./middlewares/error"); 
const authRoute = require("./routes/auth"); 

const app = express();

app.use(cors());
app.use(express.json());

// Service
app.use('/auth', authRoute); // ตรวจสอบว่าได้นิยามหรือนำเข้า authRoute มาใช้งานหรือไม่

// Not found
app.use(notFound);

// Error handling
app.use(errorMiddlewares);

let port = process.env.PORT || 8080;
app.listen(port, () => console.log("เซิร์ฟเวอร์ทำงานที่พอร์ต:", port));
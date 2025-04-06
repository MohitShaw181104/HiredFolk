import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
dotenv.config({});

const app = express();


//to check if the server is running or not
/*app.get('/home', (req, res) => {
    return res.status(200).json({ 
        message: 'Hello from the backend!',
    success: true });
});*/

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
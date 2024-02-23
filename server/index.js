
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { User } from './models/userModel.js';
dotenv.config();
const myusername= process.env.USER;
const password= process.env.PASSWORD;
const app = express();
mongoose.connect(`mongodb+srv://${myusername}:${password}@authentication.ib4cnrl.mongodb.net/?retryWrites=true&w=majority&appName=Authentication`);

app.listen(process.env.PORT, () => {
    console.log(`server is running ${process.env.PORT}`);
});

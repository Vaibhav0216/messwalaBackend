import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config({path: '.env'});

const app = express();

mongoose.connect(process.env.MONGO_URI).then(() => {    
    console.log('MongoDB Connected');
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log({message: err.message});
}); 
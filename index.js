import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import testRoutues from './routes/test.routes.js';
dotenv.config({path: '.env'});

const app = express();
app.use(express.json());

app.use('/api', testRoutues);

mongoose.connect(process.env.MONGO_URI).then(() => {    
    console.log('MongoDB Connected');
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log({message: err.message});
}); 
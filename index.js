const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');

app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3000/*','https://videoflix-app.netlify.app/*','https://videoflix-app.netlify.app']
}));

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DB connection successful!");
}).catch((error) => {
    console.log(error);
});

app.use(express.json());
app.use('/api/auth', authRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log("backend server is running");
})
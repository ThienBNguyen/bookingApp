import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './api/routes/auth.js';
import usersRoute from './api/routes/users.js';
import roomsRoute from './api/routes/rooms.js';
import hotelsRoute from './api/routes/hotels.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();
dotenv.config();
let port = process.env.PORT;
if (port == null || port == '') {
	port = 8800;
}
const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log('mongoDB connected');
	} catch (error) {
		throw error;
	}
};
mongoose.connection.on('disconnected', () => {
	console.log('mongoDB disconnected');
});
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);
app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessage = err.message || 'something went wrong';
	return res.status(500).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack
	});
});
app.listen(port, () => {
	connect();
	console.log('Connected to backend');
});

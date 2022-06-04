import express from 'express';
import {
	createHotel,
	updateHotel,
	getHotels,
	countByCity,
	countByType,
	getHotelRooms,
	getHotel
} from '../controller/hotel.js';
// import{verifyAdmin} from "../utils/"
const router = express.Router();
//GET ALL
router.get('/', getHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
router.get('/room/:id', getHotelRooms);
router.post('/', createHotel);
//CREATE
//UPDATE
router.put('/:id', updateHotel);
//GET
router.get('/:id', getHotel);

export default router;

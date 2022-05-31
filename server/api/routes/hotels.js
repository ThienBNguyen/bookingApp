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

router.post('/', createHotel);
//CREATE
//UPDATE
router.options('/:id', updateHotel);
//GET
router.get('/find/:id', getHotel);
//GET ALL
router.get('/', getHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
router.get('/room/:id', getHotelRooms);

export default router;

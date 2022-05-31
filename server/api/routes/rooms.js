import express from 'express';
import { verifyAdmin } from '../utils/verifyToken.js';
import { getRooms, getRoom, createRoom, updateRoomAvailability, updateRoom, deleteRoom } from '../controller/room.js';

const router = express.Router();

router.get('/', getRooms);
router.get('/:id', getRoom);
router.post('/:hotelid', verifyAdmin, createRoom);
router.put('/availability/:id', updateRoomAvailability);
router.put('/:id', verifyAdmin, updateRoom);
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);
export default router;

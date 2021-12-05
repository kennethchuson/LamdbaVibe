import express from 'express';
const router = express.Router();
import { getSongs, getSong, updateSong, deleteSong, addSong } from '../controllers/songs';

router.get('/songs', getSongs);
router.get('/songs/:id', getSong);
router.put('/songs', updateSong);
router.delete('/songs', deleteSong);
router.post('/songs', addSong);

export default router;

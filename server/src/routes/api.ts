import express from 'express';
const router = express.Router();
import { getSongs, getSong, deleteSong, addSong } from '../controllers/songs';

router.get('/songs', getSongs);
router.get('/songs/:id', getSong);
router.delete('/songs/:id', deleteSong);
router.post('/songs', addSong);

export default router;

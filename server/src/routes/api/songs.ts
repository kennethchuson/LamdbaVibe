const router = require('express').Router();
import controller from '../../controllers/songs';


router.get('/', controller.getSongs);
router.get('/:id', controller.getSong);
router.delete('/:id', controller.deleteSong);
router.post('/', controller.addSong);

module.exports = router;
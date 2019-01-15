var express = require('express');
var router = express.Router();

// Require the controllers
var scimongo_controller = require('../controllers/scimongo.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', scimongo_controller.test);


router.post('/create', scimongo_controller.scimongo_create);

router.get('/:id', scimongo_controller.scimongo_details);

router.put('/:id/update', scimongo_controller.scimongo_update);

router.delete('/:id/delete', scimongo_controller.scimongo_delete);


module.exports = router;

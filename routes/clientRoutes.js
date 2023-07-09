//ALlow holding routes in a router
const { Router } = require('express');

//Define dependencies
const { showStorePage } = require('../controllers/clientControllers');


//Initialize router
const router = Router();

//App routes
router.get('/', showStorePage);

//Export the route for access form the app
module.exports = router;
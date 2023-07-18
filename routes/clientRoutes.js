//ALlow holding routes in a router
const { Router } = require('express');

//Define dependencies
const { showStorePage, showProductPage } = require('../controllers/clientControllers');


//Initialize router
const router = Router();

//App routes
router.get('/', showStorePage);

router.get('/product', showProductPage);

//Export the route for access form the app
module.exports = router;
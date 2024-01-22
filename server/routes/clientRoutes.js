//ALlow holding routes in a router
const { Router } = require("express");

//Define dependencies
const { getProducts } = require("../controllers/clientControllers");

//Initialize router
const router = Router();

//App routes
router.get("/get-products", getProducts);

//Export the route for access form the app
module.exports = router;

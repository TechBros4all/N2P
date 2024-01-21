//Require dependencies
require("dotenv").config();
const express = require("express");
const clientRoutes = require("./routes/clientRoutes");
const cors = require("cors");
// use connection to database
// const connection = require('./models/connection');

//Initialize the app and define a port
const app = express();
const port = process.env.PORT || 4000;

//Define necessary middlewares
//---------------------------------------------------------------

//Ejs
// app.set("view engine", "ejs");
// app.set("views", "pages");

//Allow post request from forms to req.body
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//---------------------------------------------------------------

//Serve Static Files
app.use(express.static("assets"));

//---------------------------------------------------------------

//App routes
app.use(clientRoutes);

app.listen(port, (err) =>
  console.log(err || `Visit http://localhost:${port}/`)
);

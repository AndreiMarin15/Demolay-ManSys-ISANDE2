const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");


require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json({limit: "10mb", extended: true}))
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB database connection established successfully");
});

const applicationsRouter = require("./routes/routesApplications");

app.use("/", applicationsRouter);

app.listen(port, () => {
	console.log(`server is running on port: ${port}`);
});

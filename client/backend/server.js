const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json({ limit: "10mb", extended: true }));
app.use(express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const store = new MongoDBSession({
	uri: uri,
	collection: "Sessions",
});

app.use(
	session({
		secret: "database",
		resave: false,
		saveUninitialized: true,
		store: store,
		expires: new Date(Date.now() + 864000000),
	})
);

app.use(function (req, res, next) {
	res.locals.session = req.session;
	next();
});

const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB database connection established successfully");
});

const applicationsRouter = require("./routes/routesApplications");

app.use("/", applicationsRouter);

app.listen(port, () => {
	console.log(`server is running on port: ${port}`);
});
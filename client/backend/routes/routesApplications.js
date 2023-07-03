const router = require("express").Router();
//let Application = require("../models/applications");
const controller = require("../controllers/controller");

router.route("/").get((req, res) => {
	// Application.find()
	// 	.then((applications) => res.json(applications))
	// 	.catch((err) => res.status(400).json(err));
	res.redirect("/login");
});

router.route("/login", controller.getIndex);

module.exports = router;

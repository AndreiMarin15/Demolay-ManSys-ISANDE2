const router = require("express").Router();
//let Application = require("../models/applications");
const controller = require("../controllers/controller");

//router.route("/").get((req, res) => {
//	// Application.find()
//	// 	.then((applications) => res.json(applications))
//	// 	.catch((err) => res.status(400).json(err));
//	res.redirect("/login");
//});

// router.get("/login", controller.getIndex);
router.post("/newApplication", controller.newApplication);
router.post("/newApplication2/:id", controller.newApplication2);
router.post("/newApplication3/:id", controller.newApplication3);
router.post("/newApplication4/:id", controller.newApplication4);
router.post("/newApplication5/:id", controller.newApplication5);
router.post("/login", controller.login);
router.post("/createMember", controller.createMember);
router.post("/createAdvisor", controller.createAdvisor);
router.post("/createAdmin", controller.createAdmin);

router.get("/initDatabase", controller.checkAndInitDB);
router.get("/getRegions", controller.getRegions);
router.get("/getChapters/:regionId", controller.getChapters);
router.get("/getAllChapters/", controller.getAllChapters);
router.get("/getProvinces", controller.getProvinces);
router.get("/getCities/:provinceID", controller.getCities);
router.get("/generateID", controller.generateApplicantID);
router.get("/getStatus1/:id", controller.getAppStatus1);

router.get("/applications/:id", controller.getApplication);

router.get("/getCurrentUser", controller.getCurrentUser);

module.exports = router;

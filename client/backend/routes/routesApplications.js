const router = require("express").Router();
//let Application = require("../models/applications");
const controller = require("../controllers/controller");
const turnoverController = require("../controllers/turnoverController");

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
router.post("/createScribe", controller.createScribe);
router.post("/createGrandMaster", controller.createGrandmaster);

router.get("/initDatabase", controller.checkAndInitDB);
router.get("/getRegions", controller.getRegions);
router.get("/getChapters/:regionId", controller.getChapters);
router.get("/getAllChapters/", controller.getAllChapters);
router.get("/getAllChaptersById/", controller.getChaptersById);
router.get("/generateID", controller.generateApplicantID);
router.get("/getStatus1/:id", controller.getAppStatus1);
router.get("/generateMemberId", controller.generateMemberId);
router.get("/petitionedApplications", controller.getPetitionedApplications);

router.post("/approveApplication", controller.approveForPetitioning);
router.post("/rejectApplication", controller.rejectApplication);
router.post("/updatePetition", controller.updatePetition);

router.get(
  "/retrieveInitiatedMembers/:form10Id",
  controller.retrieveInitiatedMembers
);
router.post("/acceptForm10", controller.createAccountsForInitiatedMembers);

router.post("/submitProofOfPayment", controller.submitProofOfPayment);

router.get("/getApplications", controller.getApplications);

router.get("/applications/:id", controller.getApplication);

router.get("/getCurrentUser", controller.getCurrentUser);
router.get("/getUser/:memberId", controller.getCurrentMember);

router.get("/getForm10", controller.getForm10);
router.post("/updateForm10/:form10Id", controller.updateForm10);

router.post("/newTF", turnoverController.newTF);
router.post("/updateTF/:id", turnoverController.updateTF);
router.get("/getForm1/:id", turnoverController.getForm1);

router.post("/newF15", turnoverController.newF15);
router.post("/updateF15/:id", turnoverController.updateF15);
router.get("/getForm15/:id", turnoverController.getForm15);

router.post("/newAR", turnoverController.newAR);
router.post("/updateAR/:id", turnoverController.updateAR);
router.get("/getAR/:id", turnoverController.getAR);

router.post("/newAdvisory", turnoverController.newAdvisory);
router.post("/updateAdvisory/:id", turnoverController.updateAdvisory);
router.get("/getAdvisory/:id", turnoverController.getAdvisory);

router.post("/newTurnover", turnoverController.newTurnover);
router.post("/updateTurnover", turnoverController.updateTurnover);

router.get(
  "/getTurnoverReports/:chapterID/:currentTerm",
  turnoverController.getTurnoverReports
);
router.get("/getChapterByID/:chapter", controller.getChapterByID);
router.get(
  "/getTurnoverReports/:chapterID/:currentTerm",
  turnoverController.getTurnoverReports
);
router.get("/getForm1/:id", turnoverController.getForm1);

router.get("/getAllMembers/:id", turnoverController.getAllMembers);
router.get("/getChapters", turnoverController.getAllChapters);

router.get("/getCirculars", controller.getCirculars);
router.get("/getCircular/:circularId", controller.getCircularById);
router.get("/getCircularsByUser/:memberId", controller.getCircularsByUser);

router.post("/newCircular", controller.newCircular);

router.get("/getMembers", controller.getMembers);

router.get("/getEOs", controller.getEOs);
router.get("/getMemberIDs", controller.getMemberIDs);
router.get("/getAdvisoryCouncil", controller.getMemberIDs);
router.get("/getChapterScribes", controller.getMemberIDs);

router.post("/disseminateCircular/:circularId", controller.disseminateCircular);

module.exports = router;

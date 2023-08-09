const router = require("express").Router();
//let Application = require("../models/applications");
const controller = require("../controllers/controller");
const controller2 = require("../controllers/turnoverController");

//router.route("/").get((req, res) => {
//	// Application.find()
//	// 	.then((applications) => res.json(applications))
//	// 	.catch((err) => res.status(400).json(err));
//	res.redirect("/login");
//});

// router.get("/login", controller.getIndex);
router.get("/getSession", controller.getSession);

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
router.post("/createEO", controller.createEO);

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

router.post("/newTF", controller2.newTF);
router.post("/updateTF/:id", controller2.updateTF);
router.get("/getForm1/:id", controller2.getForm1);

router.post("/newF15", controller2.newF15);
router.post("/updateF15/:id", controller2.updateF15);
router.get("/getForm15/:id", controller2.getForm15);

router.post("/newAR", controller2.newAR);
router.post("/updateAR/:id", controller2.updateAR);
router.get("/getAR/:id", controller2.getAR);

router.post("/newAdvisory", controller2.newAdvisory);
router.post("/updateAdvisory/:id", controller2.updateAdvisory);
router.get("/getAdvisory/:id", controller2.getAdvisory);

router.post("/newTurnover", controller2.newTurnover);
router.post("/updateTurnover", controller2.updateTurnover);

router.get(
  "/getTurnoverReports/:chapterID/:currentTerm",
  controller2.getTurnoverReports
);

router.get("/getChapterByID/:chapter", controller.getChapterByID);
router.get(
  "/getTurnoverReports/:chapterID/:currentTerm",
  controller2.getTurnoverReports
);
router.get("/getForm1/:id", controller2.getForm1);

router.get("/getAllMembers/:id", controller2.getAllMembers);
router.get("/getChapters", controller2.getAllChapters);

router.post("/newEvents", controller2.newEvents);
router.post("/updateEvents/:id", controller2.updateEvents);
router.get("/getEvents/:id", controller2.getEvents);

router.post("/newAwardApplication", controller2.newApplication);
router.post("/updateAwardApplication/:id", controller2.updateApplication);
router.get("/getAwardApplications/:id", controller2.getCurrentApplications);
router.get("/getAllAwardApplications", controller2.getAllApplications);

router.get("/getCirculars", controller.getCirculars);
router.get("/getCircular/:circularId", controller.getCircularById);
router.get("/getCircularsByUser/:memberId", controller.getCircularsByUser);

router.post("/newCircular", controller.newCircular);

router.get("/getMembers", controller.getMembers);
router.get("/getMembers/:chapterId", controller.getMembersByChapter);

router.get("/getEOs", controller.getEOs);
router.get("/getMemberIDs", controller.getMemberIDs);
router.get("/getAdvisoryCouncil", controller.getAdvisoryCouncil);
router.get("/getChapterScribes", controller.getChapterScribes);

router.post("/disseminateCircular/:circularId", controller.disseminateCircular);

router.post("/updateRead/:memberId/:circularId", controller.updateRead);

router.post("/sendMessage/:memberId", controller.sendMessage);
router.get("/getInbox/:memberId", controller.retrieveInbox);

module.exports = router;

const Application = require("../models/applications.js");
const db = require("../models/db.js");

const controller = {
	newApplication: async (req, res) => {
		const application = {
			regionId: req.body.regionId,
			chapterId: req.body.chapterId,
		};

		await db.insertOne(Application, application, (result) => {
			console.log(result._id);
			res.send(result._id);
		});
	},

	newApplication2: async (req, res) => {
		const applicationId = req.params.applicationId;

		await db.updateOne(Application, { _id: applicationId }, {}, (result) => {
			console.log(result);
			res.send(result._id);
		});
	},
};

module.exports = controller;

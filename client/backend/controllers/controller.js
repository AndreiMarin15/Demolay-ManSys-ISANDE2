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
		const applicationId = req.params.id;
		console.log(applicationId);
		console.log(req.body);
		
		const update = {
			lastName: req.body.lastName,
			givenName: req.body.givenName,
			middleName: req.body.middleName,

			streetAddress: req.body.streetAddress,
			apt: req.body.apt,
			brgy: req.body.brgy,
			city: req.body.city,
			state: req.body.state,
			memberRegion: req.body.memberRegion,
			zipCode: req.body.zipCode,

			email: req.body.email,
			birthdate: req.body.birthdate,
			currentSchool: req.body.currentSchool,
			facebook: req.body.facebook,
			birthplace: req.body.birthplace,
			course: req.body.course,
			mobile: req.body.mobile,
			religion: req.body.religion,
			phone: req.body.phone,

			schoolAddress: req.body.schoolAddress,
			hobbies: req.body.hobbies,
			interests: req.body.interests,
			clubs: req.body.clubs,
		};

		console.log(update);

		await db.updateOne(Application, { _id: applicationId }, update, (result) => {
			console.log(result);
			res.send(result._id);
		});
	},

	newApplication3: async (req, res) => {
		// TODO - Implement this function to handle the third step of creating an Application in the system

		const applicationId = req.params.id;
		console.log(applicationId);
		console.log(req.body);
		const update = {
			appliedInAnotherChapter: req.body.appliedInAnotherChapter,
			chapterApplied: req.body.chapterApplied,
			yearApplied: req.body.yearApplied,
			status: req.body.status,

			relativeName: req.body.relativeName,
			relationship: req.body.relationship,
			lodge: req.body.lodge,

			reference1Name: req.body.reference1Name,
			reference1Age: req.body.reference1Age,
			reference1Email: req.body.reference1Email,
			reference1Mobile: req.body.reference1Mobile,

			reference2Name: req.body.reference2Name,
			reference2Age: req.body.reference2Age,
			reference2Email: req.body.reference2Email,
			reference2Mobile: req.body.reference2Mobile,

			parentName: req.body.parentName,
			parentRelationship: req.body.parentRelationship,
			parentEmail: req.body.parentEmail,
			parentMobile: req.body.parentMobile,
			parentApproved: req.body.parentApproved,
		};

		console.log(update);

		await db.updateOne(Application, { _id: applicationId }, update, (result) => {
			
			res.send(result._id);
		});
	},

	newApplication4: async(req, res) => {
		const applicationId = req.params.id;
		console.log(applicationId);
		console.log(req.body);
		
		const update = {
			lastName: req.body.lastName,
			givenName: req.body.givenName,
			middleName: req.body.middleName,

			streetAddress: req.body.streetAddress,
			apt: req.body.apt,
			brgy: req.body.brgy,
			city: req.body.city,
			state: req.body.state,
			memberRegion: req.body.memberRegion,
			zipCode: req.body.zipCode,

			email: req.body.email,
			birthdate: req.body.birthdate,
			currentSchool: req.body.currentSchool,
			facebook: req.body.facebook,
			birthplace: req.body.birthplace,
			course: req.body.course,
			mobile: req.body.mobile,
			religion: req.body.religion,
			phone: req.body.phone,

			schoolAddress: req.body.schoolAddress,
			hobbies: req.body.hobbies,
			interests: req.body.interests,
			clubs: req.body.clubs,

			appliedInAnotherChapter: req.body.appliedInAnotherChapter,
			chapterApplied: req.body.chapterApplied,
			yearApplied: req.body.yearApplied,
			status: req.body.status,

			relativeName: req.body.relativeName,
			relationship: req.body.relationship,
			lodge: req.body.lodge,

			reference1Name: req.body.reference1Name,
			reference1Age: req.body.reference1Age,
			reference1Email: req.body.reference1Email,
			reference1Mobile: req.body.reference1Mobile,

			reference2Name: req.body.reference2Name,
			reference2Age: req.body.reference2Age,
			reference2Email: req.body.reference2Email,
			reference2Mobile: req.body.reference2Mobile,

			parentName: req.body.parentName,
			parentRelationship: req.body.parentRelationship,
			parentEmail: req.body.parentEmail,
			parentMobile: req.body.parentMobile,
			parentApproved: req.body.parentApproved,
		};

		console.log(update);

		await db.updateOne(Application, { _id: applicationId }, update, (result) => {
			console.log(result);
			res.send(result._id);
		});
	},

	getApplication: async(req, res) => {
		const applicationId = req.params.id

		db.findOne(Application, {_id: applicationId}, {}, (result) => {
			res.send(result)
		})
	}

	
};

module.exports = controller;

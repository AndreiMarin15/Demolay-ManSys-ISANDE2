const Application = require("../models/applications.js");
const Chapters = require("../models/chapters.js");
const Regions = require("../models/regions.js");
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

	newApplication4: async (req, res) => {
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

	getApplication: async (req, res) => {
		const applicationId = req.params.id;
		let toPass = [
			{}, [], []
		];

		db.findOne(Application, { _id: applicationId }, {}, (result) => {
			toPass[0] = (result);
			db.findMany(Regions, {}, { regionID: 1, regionName: 1 }, (regions) => {
				toPass[1] = (regions);
				Chapters.find({}, { chapterID: 1, name: 1 })
					.sort({ name: 1 })
					.then((chapters) => {
						toPass[2] = (chapters);

						res.send(toPass);
					});
			});
		});
	},

	checkAndInitDB: async (req, res) => {
		try {
			const regionCount = await Regions.countDocuments();
			const chapterCount = await Chapters.countDocuments();
			console.log(`regions: ${regionCount} chapters ${chapterCount}`);

			if (regionCount === 0) {
				// If empty, initialize DeMolay Regions data

				const initialRegions = [
					{
						regionID: 0,
						regionName: "Region NCR-A",
						regionDesc: "NCR-A",
					},

					{
						regionID: 1,
						regionName: "Region NCR-B",
						regionDesc: "NCR-B",
					},

					{
						regionID: 2,
						regionName: "Region 4-A",
						regionDesc: "Cavite",
					},

					{
						regionID: 3,
						regionName: "Region 4-B",
						regionDesc: "Laguna",
					},
				];

				await Regions.insertMany(initialRegions);

				console.log("Initialized data");
			} else {
				console.log("Regions already exist");
			}

			if (chapterCount === 0) {
				// If empty, initialize Chapters data

				const initialChapters = [
					{
						chapterID: 0,
						name: "Jose Abad Santos Chapter No. 1",
						chapterNumber: 1,
						sponsor: "Masonic Senior DeMolay Club",
						memberCount: 40,
						meetingDate: "1st Sundays",
						meetingTime: "02:00 PM",
						meetingVenue: "Philippine DeMolay Youth Center, 1440 San Marcelino St., Ermita, Manila City",
						email: "",
						website: "",
						regionID: 0,
					},

					{
						chapterID: 1,
						name: "Loyalty Chapter No. 3",
						chapterNumber: 3,
						sponsor: "Luzon Bodies A.&A.S.R.",
						memberCount: 45,
						meetingDate: "2nd Sundays",
						meetingTime: "02:00 PM",
						meetingVenue: "Philippine DeMolay Youth Center, 1440 San Marcelino St., Ermita, Manila City",
						email: "",
						website: "",
						regionID: 0,
					},

					{
						chapterID: 2,
						name: "Ambrosio A. Flores Chapter No. 45",
						chapterNumber: 45,
						sponsor:
							"Norberto S. Amoranto Memorial Masonic Lodge No. 358 F.&A.M., Capitol City Masonic Lodge No. 174 F.&A.M.",
						memberCount: 42,
						meetingDate: "2nd Sundays",
						meetingTime: "02:00 PM",
						meetingVenue: "Capitol Masonic Temple, Diliman, Quezon City",
						email: "",
						website: "",
						regionID: 0,
					},

					{
						chapterID: 3,
						name: "Gen. Douglas MacArthur Chapter No. 12",
						chapterNumber: 12,
						sponsor: "Manila Mt. Lebanon Masonic Lodge No.1",
						memberCount: 33,
						meetingDate: "2nd Saturdays",
						meetingTime: "02:00 PM",
						meetingVenue: "Scottish Rite Temple, Taft, Manila City",
						email: "",
						website: "",
						regionID: 1,
					},

					{
						chapterID: 4,
						name: "A. Mabini Chapter No. 37",
						chapterNumber: 37,
						sponsor: "BF Parañaque Masonic Club",
						memberCount: 43,
						meetingDate: "1st Sundays",
						meetingTime: "02:00 PM",
						meetingVenue: "King Solomon's Garden, Leonardo Da Vinci St., BF Resort Village, Las Piñas City",
						email: "",
						website: "",
						regionID: 1,
					},

					{
						chapterID: 5,
						name: "Katarungan Centennial Chapter No. 101",
						chapterNumber: 101,
						sponsor: "Katarungan Masonic Lodge No. 450 F.&A.M.",
						memberCount: 48,
						meetingDate: "2nd Sundays",
						meetingTime: "02:00 PM",
						meetingVenue: "Arzo Hotel Makati, 1086 Rodriguez Ave., Bangkal, Makati City",
						email: "",
						website: "",
						regionID: 1,
					},

					{
						chapterID: 6,
						name: "Dasmariñas Chapter No. 92",
						chapterNumber: 92,
						sponsor: "Dasmariñas Lodge No. 346 F.&.AM.",
						memberCount: 70,
						meetingDate: "2nd Saturdays",
						meetingTime: "02:00 PM",
						meetingVenue: "Dasmariñas Lodge No. 346 F.&A.M., Mango Village",
						email: "",
						website: "",
						regionID: 2,
					},

					{
						chapterID: 7,
						name: "Tanza Chapter No. 108",
						chapterNumber: 108,
						sponsor: "Saint Augustine Masonic Lodge No. 300 F.&A.M.",
						memberCount: 87,
						meetingDate: "2nd Saturdays",
						meetingTime: "02:00 PM",
						meetingVenue: "Saint Augustine Masonic Lodge No. 300 F.&A.M., Retirees Vill-2, Tanza, Calabarzon",
						email: "",
						website: "",
						regionID: 2,
					},

					{
						chapterID: 8,
						name: "Werner P. Schetelig Chapter No. 27",
						chapterNumber: 27,
						sponsor: "Malinaw Lodge No. 25 F.&.AM.",
						memberCount: 32,
						meetingDate: "4th Saturdays",
						meetingTime: "02:00 PM",
						meetingVenue: "Malinaw Lodge No. 25 F.&.AM., San Pablo City",
						email: "",
						website: "",
						regionID: 3,
					},

					{
						chapterID: 9,
						name: "San Pedro Chapter No. 57",
						chapterNumber: 57,
						sponsor: "San Pedro Lodge No. 292 F.&A.M.",
						memberCount: 25,
						meetingDate: "4th Saturdays",
						meetingTime: "02:00 PM",
						meetingVenue: "San Pedro Lodge No. 292 F.&A.M., Silcas Subdivision, Martinez, Biñan, Laguna",
						email: "",
						website: "",
						regionID: 3,
					},
				];

				await Chapters.insertMany(initialChapters);

				console.log("Initialized data");
				res.send("Initialized data");
			} else {
				console.log("Chapters already exist");
			}
		} catch (error) {
			console.error("Error checking or initializing data:", error);
		}
	},

	getRegions: async (req, res) => {
		db.findMany(Regions, {}, { regionID: 1, regionName: 1 }, (result) => {
			console.log(result);
			res.send(result);
		});
	},

	getChapters: async (req, res) => {
		const regionId = req.params.regionId;
		console.log(regionId);
		db.findMany(Chapters, { regionID: regionId }, { chapterID: 1, name: 1 }, (result) => {
			console.log(result);
			res.send(result);
		});
	},

	getAllChapters: async (req, res) => {
		Chapters.find({}, { chapterID: 1, name: 1 })
			.sort({ name: 1 })
			.then((result) => {
				console.log(result);
				res.send(result);
			});
	},
};

module.exports = controller;

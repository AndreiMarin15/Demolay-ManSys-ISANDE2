// insert connection string to database

// everything will only be used sa ___Controller.js these will be the replacement of usual functions because marami tayo controllers and marami rin models
const db = {
	findOne: function (model, query, projection, cb) {
		model
			.findOne(query, projection)
			.then((res) => {
				return cb(res);
			})
			.catch((err) => {
				if (err) return cb(false);
			});
	},

	findMany: function (model, query, projection, cb) {
		model
			.find(query, projection)
			.then((res) => {
				return cb(res);
			})
			.catch((err) => {
				if (err) return cb(false);
			});
	},

	insertOne: function (model, docu, cb) {
		model
			.create(docu)
			.then((res) => {
				console.log("Added: " + res);
				return cb(res);
			})
			.catch((err) => {
				if (err) return cb(false);
			});
	},

	insertMany: function (model, docs, cb) {
		model
			.insertMany(docs)
			.then((res) => {
				return cb(res);
			})
			.catch((err) => {
				if (err) return cb(false);
			});
	},

	updateOne: function (model, filter, update, cb) {
		model
			.updateOne(filter, update)
			.then((res) => {
				console.log("Updated: " + res);
				return cb(res);
			})
			.catch((err) => {
				if (err) return cb(false);
			});
	},

	updateMany: function (model, filter, update, cb) {
		model
			.updateMany(filter, update)
			.then((res) => {
				return cb(res);
			})
			.catch((err) => {
				if (err) return cb(false);
			});
	},

	delOne: function (model, conditions, cb) {
		model
			.deleteOne(conditions)
			.then((res) => {
				return cb(res);
			})
			.catch((err) => {
				if (err) return cb(false);
			});
	},

	delMany: function (model, conditions, cb) {
		model
			.deleteMany(conditions)
			.then((res) => {
				return cb(res);
			})
			.catch((err) => {
				if (err) return cb(false);
			});
	},
};

module.exports = db;

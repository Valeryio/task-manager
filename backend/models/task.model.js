

const mongoose = require("mongoose");
const projectModel = require("./project.model");

const taskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	start_date: {
		type: Date
	},
	deadline_date: {
		type: Date
	},
	project_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "project"
	}
});

const taskModel = mongoose.model("task", taskSchema);
module.exports = taskModel;
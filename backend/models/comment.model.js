
const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
	content: {
		type: String,
		required: true
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
		required: true
	},
	task_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "task",
		required: true
	}
});

const commentModel = mongoose.model("comment", commentSchema);
module.exports = commentModel;
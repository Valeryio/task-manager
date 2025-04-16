
const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	start_at: {
		type: Date
	},
	end_at: {
		type: Date
	},
	status: {
		type: String
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user"
	}
});

const projectModel = mongoose.model("project", projectSchema);
module.exports = projectModel;

const projectModel = require("../models/project.model");
const ObjectId = require("mongoose").Types.ObjectId;


const getProject = (req, res) => {
	
	const id = req.params.id || null;
	const limit = req.query.limit || null;

	if (id) {
		res.send(`This is the project with the specific id : ${id}`);
	} else if (limit) {
		res.send(`There is a limit : ${limit}`);
	} else {
		projectModel.find()
		.then((docs) => {
			res.send(`The project have been fetched : ${docs}`);
		})
		.catch((err) => {
			res.send(`Errow while fetchting all the data : ${err}`);
		})
	}

};

const addProject = (req, res) => {

	console.log("This is the project : ", req.body);

	let projectObj = {
		name: req.body.name,
		description: req.body.description,
		start_at: req.body.start_ad || null,
		end_at: req.body.end_at || null,
		status: req.body.end_at || "Not started",
		user_id: req.body.user_id
	};

	projectObj = new projectModel(projectObj);
	projectObj.save()
	.then((docs) => {
		console.log("Project created successfuly!");
		res.send(docs);
	})
	.catch((err) => {
		console.log(`Error wile creating the project ${err}`);
		res.send(err);
	});

};

const updateProject = (req, res) => {
	
}


module.exports = {getProject};
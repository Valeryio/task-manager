
const taskModel = require("../models/task.model");
const ObjectId = require("mongoose").Types.ObjectId;


const getTask = (req, res) => {
	let taskId = req.params.id || null;
	let limit = req.query.limit || null;

	if (taskId) {
		res.send(`There is a task specific ${taskId}`);
	} else if (limit) {
		res.send(`Yes there's a limit ${limit}`)
	} else {
		taskModel.find()
		.then((docs) => {
			console.log("All the tasks : ", docs);
			res.send(docs);
		})
		.catch((err) => {
			res.send(`Error while getting all the data : ${err}`);
		});
	
		console.log("ok");
	}

};

const addTask = (req, res) => {

	let taskObj = {
		title: req.body.title,
		description: req.body.description,
		start_date: req.body.start_date || null,
		deadline_date: req.body.start_date || null,
		project_id: req.body.project_id
	};

	taskObj = new taskModel(task);
	taskObj.save()
	.then((docs) => {
		console.log(`Task created successfully!`);
		res.send(docs);
	})
	.catch((err) => {
		console.log(`Error while creating the task : ${err}`);
		res.send(err);
	});

};

const updateTask = (req, res) => {
	console.log(req.params.id);

	if (!ObjectId.isValid(req.params.id)) {
		console.log("This is the object with the id : ", req.params.id);
		res.status(400).send(`ID Unknown : ${req.params.id}`);
	} else {

		const updatedTask = {
			title: req.body.title,
			description: req.body.description,
			start_date: req.body.start_date || null,
			deadline_date: req.body.start_date || null,
			project_id: req.body.project_id
		};

		console.log(UpdatedTask);

		taskModel.findByIdAndUpdate(
			req.params.id,
			{ $set: updatedTask },
			{ new: true }
		)
		.then((docs) => { res.send(`Task updated successfully ${docs}`)} )
		.catch((err) => { res.send(`Error while updating the task : ${err}`)} )	
	}

}

const deleteTask = (req, res) => {
	if (!ObjectId.isValid(req.params.id)) {
		res.status(400).send(`Unknown ID : ${req.params.id}`);
	} else {
		taskModel.findByIdAndDelete(
			req.params.id
		)
		.then((docs) => { res.send(`Task deleted successfully ${docs}!`) })
		.catch((docs) => { res.send(`Error while deleting the task ! ${err}`) })
	}
}

module.exports = {getTask, addTask, updateTask, deleteTask};                                                                                                                                                              
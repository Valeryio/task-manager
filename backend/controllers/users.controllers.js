
const userModel = require("../models/user.model");
const hashModule = require("../services/hashModule");
const joi = require("joi");

const getUser = (req, res) => {

	let userId = req.params.id || null;
	let limit = req.query.limit || null;

	if (userId) {
		res.send("Good id");
	} else if (limit) {
		res.send("Good limit");
	} else {

		userModel.find()
		.then((users) => {res.send(users)})
		.catch((err) => {res.send(`Error while fetching all the errors ${err}`)})
		// res.send("This is done");
	}
};

const addUser = async (req, res) => {
	console.log(req.body);
	const userValidationSchema = joi.object({
		name: joi.string().min(3).required(),
		email: joi.string()
		.email()
		.required(),
		password: joi.string()
		.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
		role: joi.string().required()
	})

	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		role: req.body.role
	}

	const {err, value} = userValidationSchema.validate(user);
	
	if (err) {
		res.send(`Errors : ${err}`)
	} else {
		console.log(`The user schema validation is : ${value}, password : ${req.body.password}`);
		let password = await hashModule.hashPassword(req.body.password)

		const userObj = new userModel({
			name: req.body.name,
			email: req.body.email,
			password: password,
			role: req.body.role
		});
	
		userObj.save()
		.then((docs) => {
			console.log(`Document saved successfully ${docs}!`);
			res.send(docs);
		})
		.catch((err) => {
			console.log(`Error while saving the document : ${err}`);
			res.send(err);
		});
	}
};

const updateUser = (req, res) => {

};

const deleteUser = (req, res) => {

};


module.exports = {getUser, addUser, updateUser, deleteUser};
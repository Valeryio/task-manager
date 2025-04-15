
const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
	const salt = bcrypt.genSalt(4);

	try {
		let hashedPassword = bcrypt.hash(password, salt);
		return hashedPassword;
	} catch (err) {
		console.log(`Error while hashing the password ${err}`);
	}
};

const compareHashedPassword = async (password, hashedPassword) => {
	try {
		const result = await bcrypt.compare(password, hashedPassword);
		return result;
	} catch (err) {
		console.log(`Error while comparing the password`, err);
		return false;
	}
};

module.exports = {hashPassword, compareHashedPassword};
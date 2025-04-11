
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();


const app = express();


app.get("/", (req, res) => {
	res.send("Welcome in my new project");
});

app.listen(process.env.PORT, () => {
	console.log(`The server is listenning on ${process.env.PORT}`);
})
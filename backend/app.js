
const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.routes");
const taskRoutes = require("./routes/task.routes");
const projectRoutes = require("./routes/project.routes");
dotenv.config();
require("./models/db.config");

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
	res.send("Welcome in my new project");
});

app.use("/user", userRoutes);
app.use("/task", taskRoutes);
app.use("/project", projectRoutes);


app.listen(process.env.PORT, () => {
	console.log(`The server is listenning on ${process.env.PORT}`);
});
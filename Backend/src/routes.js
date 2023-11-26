const OTTControler = require("./OTT/controller")


module.exports = (app) => {

	app.use("/health-check", (req, res) => {
		res.status(200).send({ data: "Health check completed" })
	});

	app.use("/api/ott", OTTControler);

	app.use("/*", (req, res) => {
		res.status(404).send({ error: "There is no use case to process you request" })
	});
}


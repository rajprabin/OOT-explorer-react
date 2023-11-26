const express = require("express");
const { getOttArrivals } = require("./service");
const inputValidation = require("./middleware");
const router = express.Router();

router.get("/", [inputValidation], async (req, res, next) => {
	try {
		const result = await getOttArrivals(req, res);
		return res.status(200).send(result.data);
	} catch (error) {
		console.error(`Error in get ::`, error);
		res.status(400).send(error);
	}
});

module.exports = router;

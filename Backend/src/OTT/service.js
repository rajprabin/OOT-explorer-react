const axios = require("axios");

const getOttArrivals = async (req, res) => {
	const queryParams = req.query
	const options = {
		method: 'GET',
		url: 'https://ott-details.p.rapidapi.com/advancedsearch',
		params: queryParams,
		headers: {
			'X-RapidAPI-Key': '0640e72abbmsh6a689dc31c0896bp1dbb1ajsn64af9d235103',
			'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
		}
	};

	try {
		const response = await axios(options);

		return { data: response.data }
	} catch (error) {
		throw (error)
	}
}

module.exports = {
	getOttArrivals
}
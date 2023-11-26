const express = require('express');
const app = express();
const routes = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

app.use(cors())

app.use(morgan('tiny'))

app.use(express.json());

app.use(express.urlencoded({extended:true}));


routes(app);

app.listen(3001, () => {
  console.log(`Server is running on port ${3001}`);
});

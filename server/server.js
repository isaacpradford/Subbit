// Server setup
const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json())
   .use(cors())
   .use(require('./routes'));

app.listen(5500, () => console.log('Server running on port 5500'));

module.exports = app;
// Server setup
const express = require("express");
const app = express();

app.use(express.json())
   .use(require('./routes'));

app.listen(5500, () => console.log('Server running on port 5500'));

module.exports = app;
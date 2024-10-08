const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", apiRoutes);

const PORT = 1102;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




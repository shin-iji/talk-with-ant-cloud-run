const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const formData = require("express-form-data");

const courses = require("./routes/routes");
const owner = require("./routes/owner-routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(formData.parse());

//exports.twaApi = functions.region("asia-northeast1").https.onRequest(app);

app.get("/", (req, res) => {
  res.json({
    message: "Hello from api",
  });
});

app.use("/courses", courses);

app.use("/owner", owner);

const basicAuth = require("express-basic-auth");
app.get(
  "/verify",
  basicAuth({
    challenge: true,
    users: { admin: "admin" },
  }),
  require("./controllers/owner-controller").getVerifyId
);

module.exports = app;

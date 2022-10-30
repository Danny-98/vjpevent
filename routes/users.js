const express = require("express");
const { sigin } = require("../controllers/authentication");
const { users } = require("../db/dummy");
const router = express.Router();

/* GET users listing. */
router.get("/users", function (req, res, next) {
  res.json({ users });
});

router.post("/sigin", function (req, res, next) {
  const { phoneNumber, password } = req.body;
  console.log(phoneNumber, password);
  const [signedUser] = sigin({ phoneNumber, password });
  if (signedUser) {
    return res.json({ status: 200, signedUser });
  }
  return res.json({ status: 400 });
});
module.exports = router;

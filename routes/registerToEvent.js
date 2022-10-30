const express = require("express");
const { update } = require("../controllers/registedEvent");
const registerEventController = require("../controllers/registedEvent");
const userController = require("../controllers/user");
const getRegisterMailTemplate = require("../utils/mail/getRegisterMailTemplate");
const sendMail = require("../utils/mail/sendMail");
const router = express.Router();

router.get("/:userId", function (req, res, next) {
  const { userId } = req.params;
  const events = registerEventController.getEventByUserId(userId);
  res.json({
    status: 200,
    data: events,
  });
});

router.put("/update-status", async function (req, res, next) {
  const { userId, eventId } = req.body;
  await update(eventId, userId);
  res.json({
    status: 200,
  });
});

router.post("/", async function (req, res, next) {
  const {
    userName,
    eventId,
    phoneNumber,
    companyName,
    position,
    email,
    eventName,
    question = "",
    inviteUserId,
  } = req.body;
  if (
    userName == "" ||
    eventId == "" ||
    phoneNumber === "" ||
    email === "" ||
    companyName === "" ||
    position === "" ||
    inviteUserId === ""
  ) {
    return res.json({
      status: 400,
      message: "please fill all fields required",
    });
  }

  const user = await userController.create({
    user: {
      fullName: userName,
      email,
      phoneNumber,
    },
  });
  const data = {
    eventId,
    companyName,
    position,
    eventName,
    question,
    inviteUserId,
    status: "pending",
    userId: user.id,
  };
  const created = await registerEventController.create(data);
  if (!created) {
    res.json({
      status: 500,
      message: "Something went wrong!",
    });
  }
  await sendMail({
    sendTo: email || "ducdang1206@gmail.com",
    subject: "test mail subject",
    html: getRegisterMailTemplate({
      password: user.password,
      eventName: eventName,
      appLink: "#",
    }),
  });
  return res.json({ status: "200", message: "Register to event Success" });
});

module.exports = router;

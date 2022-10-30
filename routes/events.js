const { events } = require("../db/dummy");
const router = require("./index")
router.get("/events", function (req, res, next) {
  res.json({ events });
});
router.get("/events/:eventId", function (req, res, next) {
  res.json({ events });
});

router.get("/events/:userId", function (req, res, next) {
  const { userId } = req.params;
  res.json({ events });
});

router.post("/events/", function (req, res, next) {});
router.put("/events/", function (req, res, next) {});
router.delete("/events/", function (req, res, next) {});

module.exports = router;

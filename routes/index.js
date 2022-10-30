var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ title: "Home" });
});

router.get("/inputs", function (req, res, next) {
  const inputs = [
    {
      label: "Họ Tên",
      type: "text",
      isRequired: true,
      name: "userName",
    },
    {
      label: "Tên Công ty/Doanh nghiệp",
      type: "text",
      isRequired: true,
      name: "companyName",
    },
    {
      label: "Chức vụ trong Công ty/Doanh nghiệp",
      type: "text",
      isRequired: true,
      name: "position",
    },
    {
      label: "Số điện thoại liên lạc để nhận thông báo và xác nhận tham dự",
      type: "text",
      isRequired: true,
      name: "phoneNumber",
    },
    {
      label: "Email",
      type: "text",
      isRequired: true,
      name: "email",
    },
    {
      label: "Thông tin người giới thiệu sự kiện",
      type: "text",
      isRequired: true,
      name: "inviteUserId",
    },
    {
      label: "Câu hỏi gửi đến các diễn giả (Nếu có)",
      type: "text",
      isRequired: false,
      name: "question",
    },
  ];
  res.json({ inputs });
});

module.exports = router;

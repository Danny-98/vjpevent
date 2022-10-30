"use strict";

const { users } = require("../db/dummy");

module.exports = {
  sigin: ({ phoneNumber, password }) => {
    const user = users.filter(
      (user) => user.phoneNumber === phoneNumber && user.password === password
    );
    return user;
  },
};

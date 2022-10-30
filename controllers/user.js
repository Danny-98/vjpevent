"use strict";

const { users } = require("../db/dummy");
const writeFile = require("../utils/files/writeFile");

module.exports = {
  create: async ({ user }) => {
    const password = (Math.random() + 1).toString(36).substring(7);
    const newUser = {
      ...user,
      id: `${users.length + 1}`,
      createdAt: new Date(),
      isAdmin: false,
      avatar:
        "https://gravatar.com/avatar/04334f62f6b32c03e8c194aa65840cea?s=400&d=robohash&r=r",

      password,
    };
    users.push(newUser);
    const content = JSON.stringify(users);
    if (
      await writeFile({
        prefix: "./db/dummy",
        fileName: "users.json",
        content,
      })
    ) {
      return newUser;
    }
    return null;
  },
};

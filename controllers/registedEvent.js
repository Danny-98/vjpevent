"use strict";

const { regitedEvents } = require("../db/dummy");
const writeFile = require("../utils/files/writeFile");
module.exports = {
  getEventByUserId: (userId) => {
    const events = regitedEvents.filter((user) => user.userId === userId);
    return events;
  },
  detail: (req, res) => {},
  create: async (data) => {
    regitedEvents.push(data);
    const content = JSON.stringify(regitedEvents);
    return await writeFile({
      prefix: "./db/dummy",
      fileName: "registerEvent.json",
      content,
    });
  },
  update: async (eventId, userId) => {
    regitedEvents.forEach((event) => {
      if (event.eventId === eventId && event.userId === userId) {
        event.status = "attended";
      }
    });
    const content = JSON.stringify(regitedEvents);
    return await writeFile({
      prefix: "./db/dummy",
      fileName: "registerEvent.json",
      content,
    });
  },
  delete: (req, res) => {},
};

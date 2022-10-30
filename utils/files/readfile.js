const fs = require("fs/promises");

module.exports = async ({ prefix, fileName }) => {
  try {
    const url = `${prefix}/${fileName}`;
    const rawdata = await fs.readFile(url, "utf8");
    return JSON.parse(rawdata);
  } catch (err) {
    console.error(err);
    return [];
  }
};

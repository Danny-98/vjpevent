const fs = require("fs/promises");
module.exports = async ({ prefix, fileName, content }) => {
  try {
    const url = `${prefix}/${fileName}`;
    await fs.writeFile(url, content);
    return true;
  } catch (err) {
    console.error("write file ", err);
    return false;
  }
};

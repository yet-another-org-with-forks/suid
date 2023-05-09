// @ts-check
/** @type {import("npm-check-updates").RunOptions} */
module.exports = {
  workspaces: true,
  root: true,
  dep: "dev,optional,prod,bundle,peer",
  target: (name) => {
    if (["ts-morph", "commander", "@types/node"].includes(name)) {
      return "minor";
    } else {
      return "latest";
    }
  },
};

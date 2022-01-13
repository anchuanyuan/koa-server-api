import { configure, getLogger } from "log4js";
// configure("./filename");
// const logger = getLogger();
// logger.level = "debug";
// logger.debug("Some debug messages");

configure({
  appenders: {
    cheese: { type: "file", filename: "cheese.log" },
    errors: { type: "file", filename: "errors.log" }
  },
  categories: {
    default: { appenders: ["cheese"], level: "info" },
    errors: {
      appenders: ["errors"], level: "error"
    }
  }
});
export default getLogger()
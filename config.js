//GIFTED-MD
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "giftedmd@giftedtechnexus.co.ke";
global.location = "Kampala, Uganda";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://moriceug:ykneyPF1867D9903@clustermorice.sqdmjyk.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "256707521863";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Kampala";
global.github = process.env.GITHUB || "https://github.com/mouricedevs/Gifted-Md";
global.gurl = process.env.GURL || "null";
global.website = process.env.GURL || "null";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
global.devs = "256707521863";
global.sudo = process.env.SUDO || "256707521863";
global.owner = process.env.OWNER_NUMBER || "256707521863";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "256707521863";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "null";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "2", /*Leave to Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "*ɢɪғᴛᴇᴅ-ᴍᴅ ᴠᴇʀsɪᴏɴ 3.0.0*",
  author: process.env.PACK_AUTHER || "ENG MORICE UG🇺🇬",
  packname: process.env.PACK_NAME || "ENG MORICE UG🇺🇬",
  botname: process.env.BOT_NAME || "MORICE-MD",
  ownername: process.env.OWNER_NAME || "ENG MORICE UG🇺🇬",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "MORICEUG🇺🇬").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

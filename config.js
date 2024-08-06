//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "255785046949";
global.owner = process.env.OWNER_NUMBER || "255785046949";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FMM2YvWDIvNFM4V2ZXTEdWVE9lbkhJT3BSa2ZwT1VOTkticTdjOGswND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1lzd1AzeGI0REZiVFMwOUI0TzFjWEg4T0lZTGZmaE5uS0JTeHhSR1VFYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSC80S09sV2JiUVVrL1Q5cDJoWVhnUzYyY1UxQldUL05QODBEWVF5Q1hrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPOXc4OXNkZ0pidzFLQndLazJITTB4TllUNzRxYjdGUjZsZi85UUNGTWd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFBd0RIT25kTFlVRmJDcTBWU1d4eTczRks3WjFxVDJETS9rcjZIRjE0VnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjR6OGRiWVJNUWdKdzE4cEZoYnd6bmF5b1BMRnVITk9Mb1h4MFNwNStreGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0hwejZjelRRVTMxSjl1Q3VIOTZxajNaOHJadU9jUW5EVTMvamFHWnZHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUE9UL1J3WDlGMEdRZmxIcFpkaW1KYlFNTmhyMGY5cWRlSE1DbSthNGFTQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9SaXQ5c2RybkpjVlBBeHU2bWhwSi8wNmZ2TDlYK1U3NWJrb0I1VkZCUGF1YkQ0cGpjZzJtMmVFVmx4MVdIcHZwSzlZOXNTMkxKY2VtYXBIVlJFWmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6ImlPazE5bjQvSWduWTVSOGxHSVByQlRiTGRqU2xaZ3FwUHRYM2hpUkFiMVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1Nzg1MDQ2OTQ5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjExREZCNjMwMjgxM0VFOTY0NDU1MDBDMzI1NUQwREYzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI5ODQ4NTR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc4NTA0Njk0OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRENCOTQ1NTdGQTVCMTAwRDUxMTM2RTM0NkU0MUM0NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyOTg0ODU0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvdEFPS0pqVVF6LW9DaHY1NWc5SzN3IiwicGhvbmVJZCI6ImNjMmJmNTIxLTg2NGQtNDYxNC1iOTU4LTA4MzFhNDUyZjhlZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmZDFzc0QrRmdyR0d2Rm4zRXpxYTBneUVJdTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnZ0SURHaklVNkFIK0ZOL0Urd2VISzBPNTVnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldTTTVUSjRDIiwibWUiOnsiaWQiOiIyNTU3ODUwNDY5NDk6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn4e18J+HsOKDouKDn/Cfj4bwn5akIEFobWFkIPCflqQg8J+HtfCfh7Dig6Lig5/wn4+GIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJQzcvT1VGRUliVHlyVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYeU9keTA3SDRwMm1HRXVuOERQTEtmUFpWUGdSMDRTM1ZDQnpLYjNZL1RvPSIsImFjY291bnRTaWduYXR1cmUiOiJlN1RLVU5WOHM5Q0JWSzJ0aFRXQmMzbjZ2dDJUcnE2UFRvcmg1VWwzWE55ZUhKenBLYXE2Sjdxd3lvZmhia21QdGVKVWM1bVpvOWtIL1RFeEI2azlCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQnlQQS9qdDZQVGplQzhwcytQQlFIU1RNZkFIQm9RYXFpUnF1OFArZDdVYisycG5KakYrZEppdDIza01VRXJKdU84VVBDWm1WS2UzY2lGbXVzZUdOaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3ODUwNDY5NDk6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWOGpuY3RPeCtLZHBoaExwL0F6eXluejJWVDRFZE9FdDFRZ2N5bTkyUDA2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyOTg0ODUxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdxdCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "Ahmoo",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "🇵🇰⃢⃟🏆🖤 Ahmad 🖤 🇵🇰⃢⃟🏆",
  ownername: process.env.OWNER_NAME || "🖤 Ahmad 🖤 ,
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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

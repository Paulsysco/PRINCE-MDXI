
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU2Y6jSBD8l3rFGoMx5pBaGi4fjfGNwaz2oQwFLnO6KIzxyP++wt09M9qdne3lqcgqZUZkROY3kBe4QhZqgfINlARfIUXdkbYlAgrQ6ihCBPRACCkEClhOIRuYi1i3z7F2ug8FezM3t9VFHbOnObuLT3sB3+p2j53DC3j0QFkfUxz8JmFzNNf8YtFYbhUe1MQJCn4ec3p0Lu8ws8x2L9TTpNTmoha/gEeXEWKC89gsTyhDBKYWalcQk8/Bx5NgJN91L41yZhqvPBxzApX2TKOHfoJFwbWaZLCIjDtrfg6+59CFyla7uO9fOE8Vm8Bgx1lcCsvTbFRN96sk3/j+/Cy67/ArHOconIUop5i2n+57o9H5gTuofSFcZjt4ufmXvcDZuiyQobCSk+KevW5tzIVO/Dngg6XEOBcrzewg46dzR01mIg09Oz/D3Dd3vm9uDxsvL3dT6WfgK/LhleT/9P0yJ+XVKCTeHHuLW23A62gmHkMGD0duld6kLVOTMmuLa158Dn5/tp4YgWtbdsC7g+F5vylCIX89RHwA8dXlJwOm6rvyXDSDH/AhrcnvUHqroxyfmaZe6q0F536e7mxN1e0RY2bccL1y2klyZoPpaBgk6fF1HFjHI8Ea5WY3dlz19WI41hdD14/3m0JIGk8fzEtdfXkySlA7C4HCPXqAoBhXlECKi/wZ43oAhtctCgiiz+4Ce5vzdF221xUZMUY/m/Rdz7/x2VTVjEsqyU2wHgz3cdSK7AvogZIUAaoqFE5xRQvS2qiqYIwqoPzxFKrjTFBWUPSKQ6AAgZV5QR6KPCt+rb40J0grWJZfckRBD0SkyGwEFEpq1APP9ybLq7Kh89JopI8FU9dUnROGmshrLD/QZKMjmL3V3OEMVRRmJVA4UeBYmZNHg8efPZCjG31zT8eZ53ogwqSiTl6XaQHDD2t9XMIgKOqcbts80LsDIkBhf4QRpTiPq45YnUMSnPAV6R0PoEQwrdD3NiOCwg8u76tDL8JOfdcZb3VN3IIOe5fo761RRv9sTvp8xEkDURJG7JCVeEnglNHXLv74Dq/LFiIKcVoBBejWzj6fg/Wo9JgmPhzUrapaqtoJ90Hnw5xv6g9rT/O3l4kclP1aY67VbOWuNa6Ba45nrbm6OI03tbC7jvPmV0mAAu6tyyWSQ9J17m/yaJlw5HUwMGcOw+2mI1WbjrVSOos3k9EbqSJLa6I395nf0B1+nayyxlkfZprtwWCntr6939ZkXRnNS1ctRFccoJ+LDbTS49jWbQ77E+WIU573sjYVTzN+b6lBs5gY9Vg6BNSfuP6mCopzvcxEcXvfU8EKdYdZx1lBg3V7JvKyiW7teKrXRvw2Ns+xTd/XJX53NH7+Rhg9t08OO/n+S7g32J272Efvpwzv2+xfNoKG5mnjOpfT1bMiMY6IqBtcoobBJFmEso4b47BxjrUj3nwJPDqblymkUUEyoACYh6TAIegBUtSdXWd5VPymmK46M/Oddworqv4YgV9MlSC8vVqRopzC6gQUkGe8duzs3KpluaWQfgwUULvPYCrw+AtAVR6W8QcAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "50935947307", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐖𝐎𝐋𝐕𝐄𝐒 ＬＯＲＥＮＺＯ🧛", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "New bot WhatsApp by 𝐖𝐎𝐋𝐕𝐄𝐒 ＬＯＲＥＮＺＯ🧛",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...

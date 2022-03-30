const languages = {};
languages.ar = require('./ar-SA/website.json');
languages.es = require('./es-ES/website.json');

module.exports = languages;
module.exports.webLangs = {
  ar: { name: "العربية", flag: "sa" },
  en: { name: "English", flag: "us" },
};


const botLanguages = {};
botLanguages.ar = require('./ar-SA/bot.json');
botLanguages.es = require('./es-ES/bot.json');

module.exports.botLangs = botLanguages;

module.exports.ex = require('./examples.json');

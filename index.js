const botLanguages = {};
botLanguages.ar = require('./ar-SA/bot.json');
botLanguages.es = require('./es-ES/bot.json');

module.exports.botLangs = botLanguages;

module.exports.ex = require('./examples.json');

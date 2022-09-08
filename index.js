const langsMap = {
  en: "English",
  ar: "العربية",
  fr: "Français",
};

const availableLangs = Object.keys(langsMap);

let obj = {
  devBot: require(`./onix/bot.json`),
  devWeb: require(`./onix/website.json`),
};

for (lang of availableLangs)
  obj[lang] = {
    bot: require(`./${lang}/bot.json`),
    web: require(`./${lang}/website.json`),
  };

module.exports = { availableLangs, langsMap, trans: obj };

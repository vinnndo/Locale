const langsMap = {
    en: "English",
    ar: "Arabic - العربية",
};

const availableLangs = Object.keys(langsMap);

let obj = { devBot: require(`./lyra/bot.json`), devWeb: require(`./lyra/website.json`) };

for (lang of availableLangs) obj[lang] = {
    bot: require(`./${lang}/bot.json`),
    web: require(`./${lang}/website.json`)
}

module.exports = { availableLangs, langsMap, trans: obj };
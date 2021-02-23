const locales = require('../locales/ru.json');

module.exports = {
    t: key => {
        return locales[key];
    },
}

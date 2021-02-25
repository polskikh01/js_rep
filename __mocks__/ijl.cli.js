const {navigations, config} = require('../ijl.config')

module.exports = {
    getNavigations: () => {
        return {
            ...navigations
        }
    },
    getConfigValue: (key) => config[key]
}
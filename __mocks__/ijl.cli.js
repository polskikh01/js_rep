const ijlConfig = require('../ijl.config')

module.exports = {
    getNavigations: () => {
        return {
            ...ijlConfig.navigations
        }
    }
}
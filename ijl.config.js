const pkg = require('./package')

module.exports = {
    apiPathn: "stubs/api",
    webpackConfig: {
        "output": {
            "publicPath": `/static/js_rep/${pkg.version}/`
        }
    },
}

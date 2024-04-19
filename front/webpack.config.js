module.exports = {
    mode: "development",
    entry: {
        index:"./scripts/index.js",
        films:"./scripts/createFilms.js"
    },
    output: {
        path: __dirname + "/browser",
        filename: "[name].js"
    }
}
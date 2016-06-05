module.exports = {
    entry: "./input.js",
    output: {
        path: __dirname,
        filename: "out_put/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.scss$/,
              loaders: ["style", "css", "sass"]
            },
            { test: /\.jpg$/, loader: "url-loader?mimetype=image/jpg" }
        ]
    }
};
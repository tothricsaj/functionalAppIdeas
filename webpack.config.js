const path = require('path')

module.exports = env => {

    console.log(env)

    return {
        entry: {
            main: `./${env.folder}/index.js`,
        },
        output: {
            filename: `[name].bundle.js`,
            path: path.resolve(__dirname, `${env.folder}/dist`),
        },
        // plugins: [
        //     new HtmlWebpackPlugin({
        //         template: "./src/template.html"
        //     }),
        // ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        // {
                        //   loader: MiniCssExtractPlugin.loader,
                        //   options: {
                        //     publicPath: './dist/css/style.css',
                        //   },
                        // },
                        "style-loader", 
                        "css-loader", 
                        "sass-loader" 
                    ]
                },
                {
                    test: /\.html$/,
                    use: ["html-loader"]
                },
                {
                    test: /\.(svg|png|jpg|gif)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                        }
                    }
                }
            ]
        }
    };
}
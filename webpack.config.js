const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = env => {

    console.log(`${env.folder} content is compiling....`)

    return {
        mode: 'production',
        entry: {
            main: `./${env.folder}/index.js`,
        },
        output: {
            filename: `[name].bundle.js`,
            path: path.resolve(__dirname, `${env.folder}/dist`),
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, `./${env.folder}/template.html`)
            }),
            new CleanWebpackPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        // TODO(tothricsaj): I can't make decesion.....style-loader or MiniExtractPlugin. SOOOOOOO haaaaaaaaaaaaaarrrrrrrrrrrrdddddd!!!!!
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
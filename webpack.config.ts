import path from "path";
import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import dotenv from "dotenv";

const env = dotenv.config().parsed;

const webpackConfig = (): Configuration => ({
    devtool: "source-map",
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            components: path.resolve(__dirname, "./src/components/"),
            services: path.resolve(__dirname, "./src/services/")
        }
    },
    output: {
        path: path.join(__dirname, "/build"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /dist/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/fonts/"
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {}
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.NAME": JSON.stringify(require("./package.json").name),
            "process.env.VERSION": JSON.stringify(require("./package.json").version),
            "process.env.API_BASE_URL": JSON.stringify(env.API_BASE_URL)
        }),
        new ForkTsCheckerWebpackPlugin({eslint: true})
    ]
});

export default webpackConfig;

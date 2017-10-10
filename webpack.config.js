const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const PATH = {
    source: {
        about: path.join(__dirname, 'src/scripts/about.js'),
        index: path.join(__dirname, 'src/scripts/index.js'),
        'my-works': path.join(__dirname, 'src/scripts/my-works.js'),
        blog: path.join(__dirname, 'src/scripts/blog.js'),
        vue: path.join(__dirname, 'src/scripts/vue/main.js'),
        styles: path.join(__dirname, './src/scripts/vue/styles/index.js')
    },
    build: path.join(__dirname, 'src/scripts')
};


const config = {
    entry: PATH.source,
    output: {
        path: PATH.build,
        filename: '[name].min.js',
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'svg-fill-loader/encodeSharp',
                            'sass-loader',
                            {
                                loader: 'sass-resources-loader',
                                options: {
                                    resources: [
                                        './src/scripts/vue/styles/variables.scss',
                                        './src/scripts/vue/styles/mixins.scss'
                                    ]
                                }
                            }
                        ],
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            },
            {
                /* для общих стилей на странице */
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                /* для подключения normalize.css */
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '../images/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.json$/,
                loader: 'file-loader',
                options: {
                    name: '../json/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '../scripts/fonts/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.svg$/,
                use: [
                    'url-loader',
                    {
                        /* цвет по умолчанию, подключаемых svg */
                        loader: 'svg-fill-loader?fill=black'
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'images': path.resolve(__dirname, 'src/scripts/vue/assets/images'),
            'fonts': path.resolve(__dirname, 'src/scripts/vue/assets/fonts')
        },
        extensions: ['.js', '.vue']
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
};

module.exports = config;
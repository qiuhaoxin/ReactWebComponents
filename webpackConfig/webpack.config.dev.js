const webpack=require('webpack');
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const paths=require('./paths');

/*
* postcss
*/
const autoprefixer=require('autoprefixer');
const postcssAspectRatioMini=require('postcss-aspect-ratio-mini');
const postcssPxToViewport=require('postcss-px-to-viewport');
const postcssWriteSvg=require('postcss-write-svg');
const postcssCssNext=require('postcss-cssnext');//postcss-cssnext
const postcssViewportUnits=require('postcss-viewport-units');
const cssnano=require('cssnano');

module.exports={
  mode:'development',
	entry:{
       main:paths.appEntry,
	},
	resolve:{
		extensions:['.js','.jsx','.less','.css','.jsx','.json'],
	},
  devtool:'inline-source-map',
	module:{
		rules:[
           {
           	  test:/\.(png|jpe?g|gif|svg)$/,
           	  use:[
                 {
                 	loader:'url-loader',
                 	options:{
                       limit:8192,
                       fallback:'file-loader',
                 	}
                 }
           	  ]
           },{
           	  test:/\.(js|jsx)$/,
           	  loader:require.resolve('babel-loader'),
           	  include:path.resolve(__dirname,'../src'),
           },{
              test:/\.(css)$/,
              use: [
                    require.resolve('style-loader'),
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: false,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                      },
                    },
                    {
                      loader:require.resolve('postcss-loader'),
                      options:{
                        ident:'postcss',
                        plugins:()=>[
                           require('postcss-flexbugs-fixes'),
                           autoprefixer({
                              browsers:[
                                 '>1%',
                                 'last 4 versions',
                                 'Firefox ESR',
                                 'not ie<9'
                              ],
                              flexbox:'no-2009',
                           }),
                           postcssAspectRatioMini({}),
                           postcssPxToViewport({
                              viewportWidth: 750, // (Number) The width of the viewport. 
                              viewportHeight: 1334, // (Number) The height of the viewport. 
                              unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
                              viewportUnit: 'vw', // (String) Expected units. 
                              selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
                              minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
                              mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
                           }),
                           postcssWriteSvg({
                            utf8: false
                           }),
                           postcssViewportUnits({}),

                            cssnano({
                              preset: "advanced", 
                              autoprefixer: false, 
                              "postcss-zindex": false 
                            })

                        ]
                      } 
                    },
                  ],
                //}
              //)
           },{
              test:/\.less$/,
              use: [
                    require.resolve('style-loader'),
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: false,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                      },
                    },
                    {
                      loader:require.resolve('postcss-loader'),
                      options:{
                        ident:'postcss',
                        plugins:()=>[
                           require('postcss-flexbugs-fixes'),
                           autoprefixer({
                              browsers:[
                                 '>1%',
                                 'last 4 versions',
                                 'Firefox ESR',
                                 'not ie<9'
                              ],
                              flexbox:'no-2009',
                           }),
                           postcssAspectRatioMini({}),
                           postcssPxToViewport({
                              viewportWidth: 750, // (Number) The width of the viewport. 
                              viewportHeight: 1334, // (Number) The height of the viewport. 
                              unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
                              viewportUnit: 'vw', // (String) Expected units. 
                              selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
                              minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
                              mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
                           }),
                           postcssWriteSvg({
                            utf8: false
                           }),
                           postcssViewportUnits({}),

                            cssnano({
                              preset: "advanced", 
                              autoprefixer: false, 
                              "postcss-zindex": false 
                            })

                        ]
                      } 
                    },
                    require.resolve('less-loader'),
                  ],
           },{
               test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
               exclude: /^node_modules$/,
               loader: 'file-loader?name=[name].[ext]',
           }
		]
	},
  output:{
    path:path.resolve(__dirname,"../dist"),
    filename:'bundle.js',
    publicPath: "/"
  },
    plugins:[
       new HtmlWebpackPlugin({
          template:paths.appHtml,
          inject:true,
          title:'devServer',
       }),
       new webpack.NamedModulesPlugin(),
       new webpack.HotModuleReplacementPlugin(),//HotModuleReplacementPlugin
  ]
}
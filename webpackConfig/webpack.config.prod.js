const webpack=require('webpack');
const path=require('path');
const cleanWebpackPlugin=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

const cssFilename = 'static/css/[name].[hash:8].css';

const ExtractTextOptions=Array(cssFilename.split('/').length).join('../');
//console.log("ExtractTextOptions is "+ExtractTextOptions);

const pathToClean=[
  'dist'
]

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

process.env.NODE_ENV="production";
process.env.BABEL_ENV="production";

module.exports={
	mode:'production',
	entry:{
		main:path.resolve(__dirname,'../src/example/index.js'),
	},
	output:{
		path:path.resolve(__dirname,'../dist'),
		filename:'static/js/[name].[hash:8].js',
		publicPath:'./',
	},
	resolve:{
		extensions:['.js','.jsx','.css','.less'],

	},
	module:{
		rules:[
           {
           	  test:/\.(css)$/,
              loader:ExtractTextPlugin.extract(
                {
                  fallback: {
                    loader: require.resolve('style-loader'),
                    options: {
                      hmr: false,
                    },
                  },
                  use: [
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
                    // {
                    //   loader:require.resolve('postcss-loader'),
                    //   options:{
                    //     ident:'postcss',
                    //     plugins:()=>[
                    //        require('postcss-flexbugs-fixes'),
                    //        autoprefixer({
                    //           browsers:[
                    //              '>1%',
                    //              'last 4 versions',
                    //              'Firefox ESR',
                    //              'not ie<9'
                    //           ],
                    //           flexbox:'no-2009',
                    //        }),
                    //        postcssAspectRatioMini({}),
                    //        postcssPxToViewport({
                    //           viewportWidth: 750, // (Number) The width of the viewport. 
                    //           viewportHeight: 1334, // (Number) The height of the viewport. 
                    //           unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
                    //           viewportUnit: 'vw', // (String) Expected units. 
                    //           selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
                    //           minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
                    //           mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
                    //        }),
                    //        postcssWriteSvg({
                    //         utf8: false
                    //        }),
                    //        // postcssViewportUnits({}),

                    //         cssnano({
                    //           preset: "advanced", 
                    //           autoprefixer: false, 
                    //           "postcss-zindex": false 
                    //         })
  
                    //     ]
                    //   } 
                    // },
                  ],
                 // publicPath:ExtractTextOptions
                }
              )
           },
           {
           	  test:/\.(js|jsx)$/,
           	  loader:require.resolve('babel-loader'),
           	  include:path.resolve(__dirname,'../src'),
           },
           {
           	  test:/\.less$/,
              exclude:[/node_modules/],
           	  loader:ExtractTextPlugin.extract(
                {
                  fallback: {
                    loader: require.resolve('style-loader'),
                    options: {
                      hmr: false,
                    },
                  },
                  use: [
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: false,
                        // modules: true,
                        // localIdentName: '[name]_[local]_[hash:base64:5]'
                      },
                    },
                    // {
                    //   loader:require.resolve('postcss-loader'),
                    //   options:{
                    //     ident:'postcss',
                    //     plugins:()=>[
                    //        require('postcss-flexbugs-fixes'),
                    //        autoprefixer({
                    //           browsers:[
                    //              '>1%',
                    //              'last 4 versions',
                    //              'Firefox ESR',
                    //              'not ie<9'
                    //           ],
                    //           flexbox:'no-2009',
                    //        }),
                    //        postcssAspectRatioMini({}),
                    //        postcssPxToViewport({
                    //           viewportWidth: 750, // (Number) The width of the viewport. 
                    //           viewportHeight: 1334, // (Number) The height of the viewport. 
                    //           unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
                    //           viewportUnit: 'vw', // (String) Expected units. 
                    //           selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
                    //           minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
                    //           mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
                    //        }),
                    //        postcssWriteSvg({
                    //         utf8: false
                    //        }),
                    //        // postcssViewportUnits({}),

                    //         cssnano({
                    //           preset: "advanced", 
                    //           autoprefixer: false, 
                    //           "postcss-zindex": false 
                    //         })

                    //     ]
                    //   } 
                    // },
                    {
                      loader:require.resolve('less-loader'),
                      
                    }
                  ],
                  publicPath:ExtractTextOptions
                }
              )
           },
           {
           	  test:/\.(jpe?g|pgn|svg|gif)/,
           	  loader:'url-loader',
           	  options:{
           	  	limit:8192,
           	  	name:'static/media/[name].[hash:8].[ext]',
           	  }
           },{
           	  test:/\.(woff|woff2|eot|ttf)$/,
           	  exclude:/node_modules/,
           	  loader:'file-loader',
           }
		]
	},
	plugins:[
       new cleanWebpackPlugin(pathToClean,{root:path.resolve(__dirname,"../")}),
       new HtmlWebpackPlugin({
       	  template:path.resolve(__dirname,'../src/example/public/index.html'),
       	  title:'test layout',
       	  inject:true,
       }),
       new ExtractTextPlugin({
         filename:cssFilename,
       })

	]
}
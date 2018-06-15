const paths=-require('./paths');
const webpack=require('webpack');
const path=require('path');
const CleanWebpackPlugin=require('clean-webpack-plugin');

process.env.NODE_ENV="production";
module.exports={
	mode:'production',
	entry:paths.appPubEntry,
	output:{
       path:path.resolve(__dirname,'../lib'),
       filename:'[name].js',
       libraryTarget:'umd',
       library:'reactwebcomponent',
	},
	resolve:{
		extensions:['.jsx','.js','.less','.css'],
	},
	module:{
     rules:[
        {
	   	  test:/\.(jsx)$/,
	   	  loader:'babel-loader',
	      exclude:path.resolve(__dirname,"node_modules")
   	    },{
          test:/\.js$/,
          loader:'babel-loader',
          exclude:path.resolve(__dirname,"node_modules")
        },{
          test:/\.(less)/,
          //use:['style-loader',cssLoader(true),'less-loader'],
          exclude:path.join(__dirname,'node_modules'),
          loader:'style-loader!css-loader!less-loader',
        },{
         test:/\.css$/,
         loader:'css-loader',
        },{
           	  test:/\.(jpe?g|pgn|svg|gif)/,
           	  loader:'url-loader',
           	  options:{
           	  	limit:8192,
           	  }
        },{
           	  test:/\.(woff|woff2|eot|ttf)$/,
           	  exclude:/node_modules/,
           	  loader:'file-loader',
           }
      ]
	},
	plugins:[
	  new CleanWebpackPlugin(['lib'],{root:path.resolve(__dirname,'../')}),
      new webpack.EnvironmentPlugin({NODE_ENV:'development'}),
      // new webpack.optimize.OccurrenceOrderPlugin(),
      // new webpack.optimize.UglifyJsPlugin({
      //    compress:{
      //       warnings:false,
      //    },
      //    mangle:false,
      //    beautify:true,
      //    comments:true
      // })
	],
}
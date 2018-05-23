const devServer=require('webpack-dev-server');
const webpack=require('webpack');
const config=require('../webpackConfig/webpack.config.dev.js');
const devServerConfig={
	contentBase:'../src/example/public',
	hot:true,
	port:3003,

}

// console.log("dev config is "+JSON.stringify(config));
const chalk=require('chalk');

const compiler=webpack(config);

process.env.NODE_ENV="development";
process.env.BABEL_ENV="development";

const DEFAULT_PORT=process.env.PORT || 3003;


const devServerOptins=Object.assign({},devServerConfig,{

});
console.log("devServerOptins is "+JSON.stringify(devServerOptins));
devServer.addDevServerEntrypoints(config,devServerOptins);
const server=new devServer(compiler,devServerOptins);


server.listen(DEFAULT_PORT,'127.0.0.1',()=>{
   console.log(chalk.blue(`server is starting at port ${DEFAULT_PORT}`));
})
'use strict';

const fs=require('fs');
const path=require('path');

const appDirectory=fs.realpathSync(process.cwd());
const resolvePath=relativePath=>path.resolve(appDirectory,relativePath);

module.exports={
	appEntry:resolvePath('src/example/index.js'),
	appDist:resolvePath('dist'),
	appHtml:resolvePath('src/example/public/index.html'),
	appLib:resolvePath('lib'),
	appPubEntry:resolvePath('src/index.js'),
}
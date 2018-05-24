import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Route from './routes/';
import '../components/Style/base.less';
const render=(MyComponent)=>{
	ReactDom.render(
       <MyComponent />,
       document.getElementById('root')
	)
}

render(Route);



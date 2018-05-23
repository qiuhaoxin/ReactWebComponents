import React,{Component} from 'react';
import ReactDom from 'react-dom';

const render=(MyComponent)=>{
	ReactDom.render(
       <MyComponent />,
       document.getElementById('root')
	)
}

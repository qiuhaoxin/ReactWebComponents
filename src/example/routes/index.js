
import React,{Component} from 'react';
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom';

import home from '../pages/home/index.js';
export default class Router extends Component{
	render(){
		return (
          <HashRouter>
              <Switch>
                 <Route exact path="/" component={home}/>
              </Switch>
          </HashRouter>
		)
	}
}
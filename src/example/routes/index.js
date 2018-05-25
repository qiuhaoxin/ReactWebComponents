
import React,{Component} from 'react';
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom';
import Home from '../pages/home/index.js';
import {asyncComponent} from '../../utils/util';

const Detail=asyncComponent(()=>import('../pages/detail/index.js'));

export default class Router extends Component{
	render(){
		return (
          <HashRouter>
              <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route path='/detail/:id' component={Detail}/>
                 <Redirect to="/" />
              </Switch>
          </HashRouter>
		)
	}
}
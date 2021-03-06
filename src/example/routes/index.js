
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
                 <Route exact path="/Home" component={Home}/>
                 <Route path='/detail/:id/:title' component={Detail}/>
                 <Redirect to="/Home" />
              </Switch>
          </HashRouter>
		)
	}
}
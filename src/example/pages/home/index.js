import React,{Component} from 'react';
import {is,fromJS} from 'immutable';
import Styles from './index.less';

export default class Home extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	componentWillReceiveProps(nextProps){

	}
	render(){
		return (
          <div className={Styles.wrapper}>
             home pages
          </div>
		)
	}
}
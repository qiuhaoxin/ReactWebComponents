import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {is,fromJS} from 'immutable';

import Styles from './index.less';

class Dialog extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	shouldComponentUpdate(nextProps,nextState){
       return !is(fromJS(this.props),fromJS(nextProps))||!is(fromJS(this.state),fromJS(nextState));
	}
	componentWillReceiveProps(nextProps){

	}
	render(){
		var leafDivs=[];
		let {desc,show}=this.props;
		var style={};
		if(show){
            style['visibility']='visible';
		}else{
			style['visibility']='hidden';
		}
		for(let i=0;i<12;i++){
			leafDivs.push(
				<div key={'loadingLeaf'+i} className={'hxq-loading-leaf loading-leaf-'+i}>
				</div>
			);
		}
		return (
           <div className='hxq-loading-wrapper' style={style}>
                <div className='hxq-loading'>
                     {leafDivs}
                </div>
                <p className='hxq-loading-tip'>{desc}</p>
           </div>
		)
	}
}
Dialog.propTypes={

}
Dialog.defaultProps={
   visible:false
}
export default Dialog;
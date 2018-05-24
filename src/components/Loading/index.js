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
		let leafDivs=[];
		const {desc,visible}=this.props;
		let style={};
		style['visibility']=visible?'visible':'hidden';
		for(let i=0;i<12;i++){
			leafDivs.push(
				<div key={'loadingLeaf'+i} className={`${Styles['loading-leaf']} loading-leaf-${i}`}>
				</div>
			);
		}
		return (
           <div className={Styles.wrapper} style={style}>
                <div className={Styles.loading}>
                     {leafDivs}
                </div>
                <p className={Styles['loading-tip']}>{desc}</p>
           </div>
		)
	}
}
Dialog.propTypes={
   visible:PropTypes.bool.isRequired,
   desc:PropTypes.string.isRequired,
}
Dialog.defaultProps={
   visible:false,
   desc:'数据加载中，请稍后...',
}
export default Dialog;
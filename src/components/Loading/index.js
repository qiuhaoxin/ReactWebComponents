import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {is,fromJS} from 'immutable';

import './index.less';

const prefixCls='loading';

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
			const classNameStr=`loading-leaf  loading-leaf-${i}`;
			leafDivs.push(
				//className={`${Styles['loading-leaf']} ${Styles[`loading-leaf-${i}`]}`}
				<div key={'loadingLeaf'+i} className={classNameStr}>
				</div>
			);
		}
		return (
		//className={Styles.wrapper}
           <div className={'loading-wrapper'} style={style}>
                <div className={'loading'}>
                     {leafDivs}
                </div>
                <p className={`loading-tip`}>{desc}</p>
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

/*
*className={Styles.loading}
*className={Styles['loading-tip']}
*/
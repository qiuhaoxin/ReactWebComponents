import React,{Component} from 'react';
import PropTypes from 'prop-types';
// import Styles from './index.less';
import {isEmtpy} from '../../utils/util';
import './index.less';

const prefixCls="badge";
class Badge extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	render(){
	   const {text,wrapperStyle}=this.props;
	   let tempStyle={}
	   if(text==undefined){
          tempStyle['width']='8px';
          tempStyle['height']='8px';
	   }else{
	   	  tempStyle['color']="#fff";
	   }
	   //console.log("tempStyle  is "+JSON.stringify(tempStyle));
       let wrapperStyle1=Object.assign({},tempStyle,wrapperStyle);
       //console.log("wrapperStyle is "+JSON.stringify(wrapperStyle1));
       return (
          <div className={'badge-wrapper'} >
              <span style={wrapperStyle1}>{text}</span>
          </div>
       )
	}
}

Badge.propTypes={
	text:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
}
Badge.defaultProps={

}

export default Badge;


import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less'
import {isEmpty} from '../../utils/util';


class Button extends Component{
	constructor(props){
		super(props);
		this.timeoutId=-1;
        this.handleBtnClick=this.handleBtnClick.bind(this);
	}
	state={
		activeClass:'',
	}
	componentWillMount(){

	}
	componentDidMount(){

	}
    handleBtnClick(e){
       const {onClick,type}=this.props;
       console.log("type is "+type);
       let activeClassStr='';
       if(isEmpty(type)){
           activeClassStr=`btn-active`;
       }else{
           activeClassStr=`btn-${type}-active`;
       }
       console.log("activeClassStr is "+activeClassStr);
       this.setState({
       	  activeClass:activeClassStr,
       })
       this.setTimeout();
       if(onClick)onClick(e.target);

    }
    setTimeout=()=>{
    	const _this=this;
       clearTimeout(this.timeoutId);
       this.timeoutId=setTimeout(function(){
          _this.setState({
          	activeClass:'',
          })
       },100);
    }
	render(){
        const {title,content,footer,onOK,onCancel,type,styleObj}=this.props;
        const {activeClass}=this.state;
        const classNameStr=type ? `btn-${type}` : '';
		return (
           <div className={`${Styles.wrapper} ${Styles[classNameStr]} ${Styles[activeClass]}`} style={styleObj} onClick={this.handleBtnClick}>
           {
                React.Children.map(this.props.children,function(child){
                	return (<span>{child}</span>)
                })
           }
           </div>
		)
	}
}
Button.propTypes={
	styleObj:PropTypes.object,
	type:PropTypes.string,
}
Button.defaultProps={
   type:'',//ghost,dashed,primary,danger

}
export default Button;
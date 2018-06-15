import React,{Component} from  'react';
import PropTypes from 'prop-types';
import Styles from  './index.less';

const prefixCls="icon";
class Icon extends Component{
	constructor(props){
		super(props);
	}
	state={
		icon:'',
		text:'',
	}
	componentDidMount(){
        const {config}=this.props;
        const {icon,text}=config;
        this.setState({
        	text,
        	icon,
        })
	}
	createMarkup=(icon)=>{
		return {__html:'<i data-icon="&#x'+icon+';"></i>'};
	}
	handleIconClick=()=>{
       const {config}=this.props;
       const {icon_click,text_click,clickEvents}=config;
       if(icon_click){
	       this.setState({
	       	  icon:icon_click,
	       }) 
       }      

	}
	render(){
		const {config}=this.props;
		const {iconStyle,textStyle,Style}=config;
		const {icon,text}=this.state;
		return (
           <div className={'icon-wrapper'} style={Style} onClick={this.handleIconClick}>
                <div className={'rwc-icon'} style={iconStyle} dangerouslySetInnerHTML={this.createMarkup(icon)}>
                </div>
                <div style={textStyle}>{text}</div>
           </div>
		)
	}
}
Icon.defaultProps={
    config:null,
}
Icon.propTypes={
    config:PropTypes.object,
}
export default Icon;
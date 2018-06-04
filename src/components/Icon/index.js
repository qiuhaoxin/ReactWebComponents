import React,{Component} from  'react';
import PropTypes from 'prop-types';
import Styles from  './index.less';

class Icon extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	createMarkup=(icon)=>{
	    const {config}=this.props;
		const {text,iconStyle}=config;
		console.log("iconStyle is "+JSON.stringify(iconStyle));
		return {__html:'<i data-icon="&#x'+icon+';"></i>'};
	}
	render(){
		const {config}=this.props;
		const {text,icon,iconStyle,textStyle}=config;
		return (
           <div className={Styles.wrapper}>
                <div className={Styles['rwc-icon']} 
                dangerouslySetInnerHTML={this.createMarkup(icon)}></div>
                <div>{text}</div>
           </div>
		)
	}
}
Icon.defaultProps={

}
Icon.propTypes={

}
export default Icon;
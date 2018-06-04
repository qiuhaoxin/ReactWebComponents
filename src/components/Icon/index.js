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
		return {__html:'<i data-icon="&#x'+icon+';"></i>'};
	}
	render(){
		const {config}=this.props;
		return (
           <div className={Styles.wrapper}>
                <div className={Styles['rwc-icon']} dangerouslySetInnerHTML={this.createMarkup(config.icon)}></div>
                <div>{config.text}</div>
           </div>
		)
	}
}
Icon.defaultProps={

}
Icon.propTypes={

}
export default Icon;
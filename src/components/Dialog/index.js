import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';

class Dialog extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
     
	}
	render(){
		const {title,content,footer,onOK,onCancel,visible}=this.props;
		if(footer==null){
			//自定义的按钮
		}
		return (
            <div className={Styles.wrapper} style={{visibility:visible?'visible':'hidden'}}>
                <div className={Styles.title}>
                   {title}
                </div>
                <div className={Styles.content}>
                    {content}
                </div>
                <div className={Styles.footer}>
                    {footer}
                </div>
            </div>
	    )
	}
}
Dialog.propTypes={
	title:PropTypes.string.isRequired,
	content:PropTypes.string.isRequired,
	onOK:PropTypes.func,
	visible:PropTypes.bool,
	onCancel:PropTypes.func,
}
Dialog.defaultProps={
	visible:false,
}

export default Dialog
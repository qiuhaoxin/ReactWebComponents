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
		let btnStr="";
		const {title,content,footer,onOK,onCancel,visible}=this.props;
		if(footer==null){
			//自定义的按钮
			if(onCancel!=null && onOK!=null){
				btnStr=<div className={Styles.btns}>
				<span className={Styles['btn-cancel']} onClick={onOK}>取消</span>
				<span className={Styles['btn-ok']} onClick={onCancel}>确定</span>
				</div>
			}
			if(onCancel==null && onOK!=null){
                btnStr=<div className={Styles.btns} onClick={onOK}>确定</div>;
			}
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
                    {btnStr}
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
	onOK:null,
	onCancel:null,
}

export default Dialog
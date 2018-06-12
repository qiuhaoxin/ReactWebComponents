import React,{Component} from 'react';
import PropTypes from 'prop-types';
// import Styles from './index.less';
import './index.less';

const prefixCls='dialog';

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
				btnStr=<div className={'dialog-btns'}>
				<span className={'dialog-btn-cancel'} onClick={onOK}>取消</span>
				<span className={'dialog-btn-ok'} onClick={onCancel}>确定</span>
				</div>
			}
			if(onCancel==null && onOK!=null){
                btnStr=<div className={'dialog-btns'} onClick={onOK}>确定</div>;
			}
		}
		return (
            <div className={'dialog-wrapper'} style={{visibility:visible?'visible':'hidden'}}>
                <div className={'dialog-title'}>
                   {title}
                </div>
                <div className={'dialog-content'}>
                    {content}
                </div>
                <div className={'dialog-footer'}>
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
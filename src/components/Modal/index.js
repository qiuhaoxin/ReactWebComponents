import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './index.less';
import classNames from 'classnames';

class Modal extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	handleConfirm=()=>{
        const {onOk}=this.props;
        onOk && onOk();
	}
	handleCancel=()=>{
        const {onCancel}=this.props;
        onCancel && onCancel();
	}
	renderFooter=()=>{
		return <div className="modal-footer">
            <div className='modal-footer-cancel' onClick={this.handleCancel}>
               取消
            </div>
            <div className='modal-footer-confirm' onClick={this.handleConfirm}>
               确定
            </div>
		</div>
	}
	render(){
	   const {style,title,visible}=this.props;
       const wrapperCls=classNames({
       	  [`modal-show`]:!!visible,
       	  [`modal-hide`]:!visible,
       },'modal-wrapper');
       return (
          <div className={wrapperCls} style={style}>
             {title ? <div className='modal-header'>{title}</div> : null}
             <div className="modal-innerWrapper">
	            {
	              React.Children.map(this.props.children,child=>{
	              	 return <div>{child}</div>
	              })
	            }
             </div>
             {this.renderFooter()}
          </div>
       )
	}
}
Modal.defaultProps={
    style:null,
    title:'',
    visible:false,
}
Modal.propTypes={
    style:PropTypes.object,
    title:PropTypes.string.isRequired,
    onOk:PropTypes.func.isRequired,
    onCancel:PropTypes.func.isRequired,
    visible:PropTypes.bool.isRequired,
}
export default Modal;
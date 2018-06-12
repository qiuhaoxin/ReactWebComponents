import React,{Component} from 'react';
import PropTypes from 'prop-types';
// import Styles from './index.less';
import classNames from 'classnames';
import './index.less';

const prefixCls="switch";
class Switch extends Component{
	constructor(props){
		super(props);
	}
    state={
    	status:0,//0:关 1:开
    }
    componentDidMount(){
    	const {initStatus}=this.props;
        this.setState({
        	status:initStatus=='close' ? 0 : 1,
        })
    }
    handleClick=()=>{
        const {onChange}=this.props;
        this.setState(preState=>{
            if(onChange){
                onChange(preState.status==0 ? 1 :0);
            }
            return ({
               status:preState.status==0 ? 1 : 0, 
            })
        })
    }

	render(){
		const {openText,closeText}=this.props;
		const {status}=this.state;
		const classNameStr=classNames(
			   {'switch-open':status==1,'switch-close':status==0}
		)
		return (
           <div className={'switch-wrapper'}>
                <div onClick={this.handleClick} className={`${classNameStr}`}>
                </div>
           </div>
		)
	}
}

Switch.propTypes={
    openText:PropTypes.string,
    closeText:PropTypes.string,
    needShowText:PropTypes.bool,
}
Switch.defaultProps={
	openText:'开',
	closeText:'关',
	needShowText:false,
	initStatus:'close',
}

export default Switch;
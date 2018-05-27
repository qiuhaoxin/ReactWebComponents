import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';
import classNames from 'classnames';

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
        	status:initStatus=='close'?0:1,

        })
    }
    handleClick=()=>{

    }
	render(){
		const {openText,closeText}=this.props;
		const {status}=this.state;
		const classNameStr=classNames(
			   {'switch-show':status==1,'switch-hide':status==0}
			)
		return (
           <div className={Styles.wrapper}>
                <div onClick={this.handleClick} className={Styles[`${classNameStr}`]}>
                    <span>{openText}</span>
                    <span>{closeText}</span>
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
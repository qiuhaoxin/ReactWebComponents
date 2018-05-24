import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less'


class Button extends Component{
	//btnMode 1 
    static defaultProps={
    	btnMode:1,
    }
	constructor(props){
		super(props);
        
	}
	componentWillMount(){

	}
	componentDidMount(){

	}
	shouldComponentUpdate(nextProps,nextState){
        return false;
	}
    handleBtnClick(btnCB,key){
        btnCB(key);
    }
    transformStyle=(style)=>{
    	var wrapperClass='';
        switch(style){
            case 'borderTop':
	            wrapperClass="btn-border-top";
	            break;
            case 'borderRight':
	            wrapperClass="btn-border-right";
	            break;
            case 'borderLeft':
	            wrapperClass="btn-border-left";
	            break;
            case 'borderBottom':
	            wrapperClass="btn-border-bottom";
	            break;
        }
        return wrapperClass;
    }
	render(){
        const {title,content,footer,onOK,onCancel}=this.props;
		return (
           <div className={Styles.wrapper}>
                
           </div>
		)
	}
}
export default Button;
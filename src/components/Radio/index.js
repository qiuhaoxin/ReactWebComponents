import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {is,fromJS} from 'immutable';
// import Styles from './index.less';
import './index.less';

const prefixCls="radio";
class Radio extends Component{
	constructor(props,context){
		super(props,context);
		// this.state={
		// 	selected:props.selected||props.config['radioData'][0]['type']
		// }
	}
  
	componentDidMount(){

	}
  componentWillReceiveProps(nextProps){
    
  }
  handleRadioChange(value){
    const {radioGroup}=this.context;
    if(radioGroup.onChange)radioGroup.onChange(value);
  }
	render(){
		//let {config}=this.props;
		const {text,onChange,value}=this.props;
		const {radioGroup}=this.context;
    let classNameStr="";
    if(radioGroup){
      const defaultValue=radioGroup.defaultValue;
      if(defaultValue==value){
         classNameStr='selected';
      }
    }
		return (
			<div className={'radio-wrapper'}>
		        <label className={`radio-item ${classNameStr}`} onClick={()=>this.handleRadioChange(value)}>
                   <input className={`item-input`} name='radio' type='radio'/>
                   {
                      React.Children.map(this.props.children,function(child){
                      	 return (<span>{child}</span>)
                      })
                   }
		        </label>
			</div>
		)
	
	}
}
Radio.propTypes={

}
Radio.defaultProps={

}
Radio.contextTypes={
	radioGroup:PropTypes.object,
}

class RadioGroup extends Component{
   constructor(props){
   	  super(props);
   }
   state={
   	 value:'',
   }
   getChildContext(){
   	  return {
   	  	radioGroup:{
   	  		onChange:this.handleRadioChange,
   	  		defaultValue:this.props.defaultValue,
   	  		name:this.props.name,
   	  		value:this.state.value,
   	  		disabled:this.props.disabled,
   	  	}
   	  }
   }
   componentDidMount(){
   	    const {props}=this;
   	   	let value;
	   	  if('value' in props){
	         value=props['value'];
	   	  }else if('defaultValue' in props){
	   	  	 value=props['defaultValue'];
	   	  }
	   	  this.setState({
	   	  	value
	   	  })
   }
   handleRadioChange=(value)=>{
      const {onChange}=this.props;
      this.setState({
        value
      })
      if(onChange)onChange(value);
   }
   render(){
   	 return (
       <div className={'radio-group'}>
          {
          	React.Children.map(this.props.children,function(child){
          		return (
                   <div>
                        {child}
                   </div>
          		)
          	})
          }
       </div>
   	 )
   }
}
RadioGroup.childContextTypes={
	radioGroup:PropTypes.object,
}
RadioGroup.propTypes={
  onChange:PropTypes.func.isRequired,
  value:PropTypes.oneOfType([PropTypes.number,PropTypes.string,PropTypes.bool]),
  disabled:PropTypes.bool,
  defaultValue:PropTypes.oneOfType([PropTypes.number,PropTypes.string,PropTypes.bool]),
}
RadioGroup.defaultProps={
	disabled:false,
  onChange:null,
}
Radio.RadioGroup=RadioGroup;
export default Radio;
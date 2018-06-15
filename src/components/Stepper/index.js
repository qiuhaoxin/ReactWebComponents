import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {isEmptyObject} from '../../utils/util';
import './index.less';

const prefixCls="steper";
class Stepper extends Component{
	constructor(props){
		super(props);
	}
	state={
		numberContent:0,
        leftIndicatorDisabled:false,
        rightIndicatorDisabled:false,
	}
	componentDidMount(){
         const {start,leftIndicatorDisabled,rightIndicatorDisabled}=this.props;
         this.setState({
         	numberContent:start,
         	leftIndicatorDisabled,
         	rightIndicatorDisabled,
         })
	}
	componentWillReceiveProps(nextProps){
       if(nextProps.start !=this.props.start){
       	  this.setState({
       	  	numberContent:start,
       	  })
       }
       if(nextProps.leftIndicatorDisabled!=this.props.leftIndicatorDisabled){
          this.setState({
          	leftIndicatorDisabled:nextProps.leftIndicatorDisabled,
          })
       }
       if(nextProps.rightIndicatorDisabled!=this.props.rightIndicatorDisabled){
       	  this.setState({
       	  	rightIndicatorDisabled:nextProps.rightIndicatorDisabled,
       	  })
       }
	}
	handleAddClick=()=>{
		const {offset,limit,rightIndicatorClick}=this.props;
		const {rightIndicatorDisabled,numberContent}=this.state;
		if(rightIndicatorDisabled){
			return;
		}
		if(!isEmptyObject(limit) && 'max' in limit){
			if(numberContent>=limit.max){
				return;
			}
		}
        this.setState(preState=>{
        	const nextNumberContent=preState.numberContent + offset;
        	if(rightIndicatorClick)rightIndicatorClick(nextNumberContent);
        	return ({
        	      numberContent:nextNumberContent,
        	      rightIndicatorDisabled:nextNumberContent >= limit.max ? true : false,
        	      leftIndicatorDisabled:nextNumberContent <= limit.min ? true : false,
            })
        })
	}

	handleReduceClikc=()=>{
        const {offset,leftIndicatorClick,limit}=this.props;
        const {leftIndicatorDisabled,numberContent}=this.state;
        if(leftIndicatorDisabled){
        	return;
        }
       // console.log(JSON.stringify(limit)+"is limit empty ? "+isEmptyObject(limit));
        if(!isEmptyObject(limit) && 'min' in limit){
        	if(numberContent<=limit.min){
        		return;
        	}
        }
        this.setState(preState=>{
        	const nextNumberContent=preState.numberContent - offset;
        	if(leftIndicatorClick)leftIndicatorClick(nextNumberContent);
        	return ({
        		numberContent:nextNumberContent,
        		leftIndicatorDisabled:nextNumberContent<=limit.min ? true : false,
        		rightIndicatorDisabled:nextNumberContent >= limit.max ? true : false,
            })
        })

	}

	//action:add or reduce
	validate=(action)=>{
       
	}
	render(){
	   const {start,disabled}=this.props;

	   const {numberContent,leftIndicatorDisabled,rightIndicatorDisabled}=this.state;
	   let leftDisabled='',rightDisabled='';
       leftDisabled=leftIndicatorDisabled ? 'left-indicator-disabled' : '';
       rightDisabled=rightIndicatorDisabled ? "right-indicator-disabled" : '';

       return (
           <div className={'stepper-wrapper'}>
               <div className={`leftIndicator ${leftDisabled}`} onClick={this.handleReduceClikc}>

               </div>

               <div className={'stepper-content'}>
                    {numberContent}
               </div>
               <div className={`rightIndicator ${rightDisabled}`} onClick={this.handleAddClick}>

               </div>
           </div>
       )
	}

}

Stepper.defaultProps={
   start:0,
   offset:1,
   leftIndicatorDisabled:false,
   rightIndicatorDisabled:false,
   leftIndicatorClick:null,
   rightIndicatorClick:null,
   limit:{},//上下限
}
Stepper.propTypes={
   start:PropTypes.number,
   offset:PropTypes.number,
   leftIndicatorDisabled:PropTypes.bool,
   rightIndicatorDisabled:PropTypes.bool,
   leftIndicatorClick:PropTypes.func,
   rightIndicatorClick:PropTypes.func,
   limit:PropTypes.shape({
   	  max:PropTypes.number,
   	  min:PropTypes.number,
   })

}
export default Stepper;
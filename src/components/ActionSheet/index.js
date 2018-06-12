import React,{Component} from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import {is,fromJS} from 'immutable';
import './index.less';

const prefixCls="as";
class ActionSheet extends Component{
     constructor(props){
     	super(props);
     }
     state={
     	visibility:false,
     }
     componentDidMount(){

     }
     componentWillReceiveProps(nextProps){
        if(nextProps.visible!=this.props.visible || nextProps.visible){
        	this.setState({
        		visibility:nextProps.visible,
        	})
        }
     }
     shouldComponentUpdate(nextProps,nextState){
     	return !is(fromJS(nextProps),fromJS(this.props)) || !is(fromJS(nextState),fromJS(this.state));
     }
     handleClick=(item)=>{
         const {onItemClick}=this.props;
         if(onItemClick)onItemClick(item);
     }
     handleCancelClick=()=>{
         const {onCancelClick}=this.props;
         this.setState({
         	visibility:false,
         })
         if(onCancelClick)onCancelClick();
     }
     handleMaskerClick=()=>{
        
     }
     render(){
     	const {data,onItemClick,cancelBtn,visible,descrition}=this.props;
     	const {visibility}=this.state;
     	const visibleClass=visibility ? 'as-show' : 'as-hide';
     	const maskerVisible=visibility ? 'show-masker' : 'hide-masker';
        //data.push({id:99,text:cancelBtn});
     	return (
           <div className={'as-wrapper'}>
               <div className={`as-content ${visibleClass}`} >
                   <div className={'as-descrition'}>{descrition}</div>
	               <ul className={'as-actionSheetList'}>
	               {
	                  data.map(item=><li key={item.id} onClick={()=>this.handleClick(item)}><span>{item.text}</span></li>)
	               }
	               </ul>
	               <div className={'as-space'}></div>
	               <div className={'as-cancelBtn'} onClick={this.handleCancelClick}>
	                  {cancelBtn}
	               </div>
               </div>
               <div className={`as-masker ${maskerVisible}`}>
                   
               </div>
           </div>
        )
     }
}
ActionSheet.propTypes={
   data:PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
   onItemClick:PropTypes.func.isRequired,
   onCancelClick:PropTypes.func,
   cancelBtn:PropTypes.string,
   descrition:PropTypes.string,
   visible:PropTypes.bool.isRequired,
}
ActionSheet.defaultProps={
     cancelBtn:'取消',
     onItemClick:null,
     onCancelClick:null,
     visible:false,
     descrition:'ActionSheet描述说明'
}

export default ActionSheet;  
import React,{Component} from 'react';
import PropTypes from 'prop-types';
// import Styles from './index.less';
import './index.less';

import Header from '../Header/index.js';
import Icon from '../Icon/index.js';

const prefixCls='tabpage';
class TabPage extends Component{
	constructor(props){
		super(props);
	}
	state={
		showMasker:false,
	}
	handleTransform=()=>{
		const _this=this;
	    if(this.mainPage && this.slavePageRef){
	    	this.mainPage.style['transform']="translate(80%,0)";
	    	this.mainPage.style['transition']="transform .1s ease";
	    	this.slavePageRef.style['transform']="translate(0,0)";
	    	this.slavePageRef.style['transition']="transform .1s ease";
	    }
        setTimeout(function(){
		    _this.setState(preState=>{
		    	return ({
		    		showMasker:true,
		    	})
		    })
        },100)
	}
	handleMasker=()=>{
		const _this=this;
		if(this.mainPage && this.slavePageRef){
			this.mainPage.style['transform']="translate(0,0)";
	    	this.mainPage.style['transition']="transform .1s ease";
	    	this.slavePageRef.style['transform']="translate(-100%,0)";
	    	this.slavePageRef.style['transition']="transform .1s ease";
		}
		setTimeout(function(){
		    _this.setState(preState=>{
		    	return ({
		    		showMasker:false,
		    	})
		    })
        },10)
	}
	handleSetRef=(element,key)=>{
       this[key]=element;
	}
	render(){
        const {slavePage}=this.props;
		const {showMasker}=this.state;
		return (
           <div className={'tabpage-wrapper'}>
               <div className={'tabpage-mainPage'} ref={(el)=>this.handleSetRef(el,'mainPage')}>
	               <Header showVisble={true} title={'TabPage'} leftComponent={()=>{return (<div onClick={this.handleTransform}><Icon config={{icon:'e912',text:'',iconStyle:{fontSize:'45px !important'}}}/></div>)} } />
	               <div style={{background:'#eee'}}>
                        {
                        	React.Children.map(this.props.children,(child)=>{
                        	    return (
                                   <div>
                                      {child}
                                   </div>
                        	    )
                            })
                        }
	               </div>
               </div>
               <div className={'tabpage-slavePage'} ref={(el)=>this.handleSetRef(el,'slavePageRef')}>
                   {slavePage()}
               </div>
               <div className={'tabpage-masker'} style={{display:showMasker ? 'block' : 'none'}} onClick={this.handleMasker}>

               </div>
           </div>
		)
	}
}
TabPage.defaultProps={
    slavePage:null,
    children:PropTypes.Element,
}
TabPage.propsType={
    slavePage:PropTypes.func,
}
export default TabPage;
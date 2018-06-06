import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';

import Header from '../Header/index.js';
import Icon from '../Icon/index.js';

class TabPage extends Component{
	constructor(props){
		super(props);
	}
	state={
		showMasker:false,
	}
	handleTransform=()=>{
		const _this=this;
	    if(this.mainPage && this.slavePage){
	    	this.mainPage.style['transform']="translate(80%,0)";
	    	this.mainPage.style['transition']="transform .1s ease";
	    	this.slavePage.style['transform']="translate(0,0)";
	    	this.slavePage.style['transition']="transform .1s ease";
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
		if(this.mainPage && this.slavePage){
			this.mainPage.style['transform']="translate(0,0)";
	    	this.mainPage.style['transition']="transform .1s ease";
	    	this.slavePage.style['transform']="translate(-100%,0)";
	    	this.slavePage.style['transition']="transform .1s ease";
		}
		setTimeout(function(){
		    _this.setState(preState=>{
		    	return ({
		    		showMasker:false,
		    	})
		    })
        },10)
	}
	render(){
        const {slavePage}=this.props;
		const {showMasker}=this.state;
		return (
           <div className={Styles.wrapper}>
               <div className={Styles.mainPage} ref={(el)=>this.mainPage=el}>
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
               <div className={Styles.slavePage} ref={(el)=>this.slavePage=el}>
                   {slavePage()}
               </div>
               <div className={Styles.masker} style={{display:showMasker ? 'block' : 'none'}} onClick={this.handleMasker}>

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
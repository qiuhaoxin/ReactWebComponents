import React,{Component} from 'react';
import PropTypes from 'prop-types';
// import Styles from './index.less';
import './index.less';

const prefixCls="popover";
class Popover extends Component{
	constructor(props){
		super(props);
		this.contentRect={left:0,top:0,height:0};
	}
	state={
       rect:{
       	  left:0,top:0,width:0,height:0,right:0,bottom:0,
       },
       visible:false,
	}
	componentDidMount(){
        const {visible}=this.props;
        this.setState({
        	visible,
        })
	}
	handleClick=()=>{
       if(this.wrapper){
       	 const rect=this.wrapper.getBoundingClientRect();
       	 if(this.contentWrapper){
       	 	this.contentRect=this.contentWrapper.getBoundingClientRect();
       	 	console.log("width is "+this.contentRect.width+" and height is "+this.contentRect.height);
       	 }
         this.setState({
         	rect,
         	visible:true,
         })
       	 
       }

	}
	renderItem=()=>{
       const {data}=this.props;
       data.map(item=><li></li>)
	}
	handleMaskerClick=()=>{
       this.setState({
       	 visible:false,
       })
	}

	render(){
		const {data,Style,children,content,align,placement}=this.props;
        const {rect,visible}=this.state;
		let contentStyle={left:`${rect.left - (-this.contentRect.width)/2}px`,top:`${rect.height - (-10)}px`,visibility:visible?'visible':'hidden'};
		return (
            <div className={'popover-wrapper'} ref={el=>this.wrapper=el}>  
               <div onClick={this.handleClick} className={'popover-children'}>
                  {children}
               </div>
               <div className={'popover-content'} style={contentStyle} ref={el=>this.contentWrapper=el}>
                  {content()}
               </div>
               <div className={'popover-masker'} style={{display:visible ? 'block' : 'none'}} onClick={this.handleMaskerClick}>

               </div>
            </div>
		)
	}
}
Popover.defaultProps={
    data:[],
}
Popover.propTypes={
    data:PropTypes.array.isRequired,

}
export default Popover;
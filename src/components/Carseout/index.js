import React,{Component} from 'react';
import PropTypes from 'prop-types';

const prefixCls="carseout";
class Carseout extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	getSlideStyles=(index)=>{


	}
	formatChildren=(children)=>{
       
       return React.Children.map(children,(child,index)=>{
       	    return (
	            <li
	               className={`slider-slide`}
	               key={index}
	               style={}
	            >
                   {child}
	            </li>
            )
       })
	}
	setInitialDimensions=()=>{
		const {initialSlideHeight,initialSlideWidth}=this.props;
		const slideWidth=
	}
	render(){
		return (
           <div className={`${prefixCls}-wrapper`}>

           </div>
		)
	}
}

Carseout.defaultProps={
	padding:'10px',

}
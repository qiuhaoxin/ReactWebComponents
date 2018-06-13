import React,{Component} from 'react';
import PropTypes from 'prop-types';


class Image extends Component{
	constructor(props){
		super(props);
	}

    componentDidMount(){
    
    }
    handleClick=()=>{
        const {onImageClick}=this.props;
    }
	render(){
	   const {imgSrc,imgStyle}=this.props;
       return (
           <div>
               <img src={imgSrc} style={imgStyle}/>

           </div> 
       )
	}
}
Image.propTypes={
	imgStyle:PropTypes.object,
	imgSrc:PropTypes.string.isRequired,

}
Image.defaultProps={
    imgSrc:'',
    imgSrc:{},
    
}
export default Image;
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';
import Icon from '../Icon/index.js';

class Header extends Component{
    constructor(props){
    	super(props);
    }
    defaultRight=()=>{
    	return (
          <div className={Styles.more}>
          
          </div>
    	)
    }
    defaultLeft=()=>{
    	return (
          <span>back3</span>
    	)
    }
    defaultRight=()=>{
      return (
        <Icon config={{icon:'e911'}} />
      )
    }
    render(){
    	const {title,showVisible,leftComponent,rightComponent}=this.props;
    	const wrapperStyle={display:showVisible ? 'inline-flex' : 'hidden'};
    	return (
           <div className={Styles.wrapper} style={wrapperStyle}>
                <div className={Styles['header-left']}>
                     {
                     	leftComponent!=null ? leftComponent() : this.defaultLeft()
                     }
                </div>
                <div className={Styles.title}>
                   {title}
                </div>
                <div className={Styles['header-right']}>
                   {
                     rightComponent!=null ? rightComponent() : this.defaultRight()
                   }
                </div>
           </div>
    	)
    }
}
Header.defaultProps={
   showVisible:true,
   title:'主页',
   leftComponent:null,
   rightComponent:null
}
Header.propTypes={
   showVisible:PropTypes.bool,
   title:PropTypes.string.isRequired,
   leftComponent:PropTypes.func,
   rightComponent:PropTypes.func,
}

export default Header;
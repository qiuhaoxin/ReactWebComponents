import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';

class Popover extends Component{
	constructor(props){
		super(props);
	}
	state={

	}
	componentDidMount(){

	}
	renderItem=()=>{
       const {data}=this.props;
       data.map(item=><li></li>)
	}
	render(){
		const {data,Style,children,content}=this.props;
		return (
            <div className={Styles.wrapper}>  
               {children}
               <div className={Styles.content}>
                  {content()}
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
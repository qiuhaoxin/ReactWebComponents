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
	render(){
		return (
            <div className={Styles.wrapper}>
                
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
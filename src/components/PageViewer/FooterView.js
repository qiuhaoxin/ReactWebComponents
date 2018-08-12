import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const styleObj={
    display:'inline-flex',
    width:'100%',
}

class FooterView extends Component{
	constructor(props){
		super(props);
	}
	handleItemClick=()=>{

	}
	renderIcon=()=>{
		const {iconData}=this.props;
		const iconStr=iconData.map(item=><li><Icon config={iconData}/></li>)
        return <ul>
             {iconStr}
        </ul>
	}
	render(){
        return (
            <div style={styleObj}>

            </div>
        )
	}
}
FooterView.defaultProps={
   iconData:[],
}
FooterView.propTypes={
   iconData:PropTypes.object
}
export default FooterView;
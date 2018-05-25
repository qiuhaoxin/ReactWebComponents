import React,{Component} from 'react';
import Styles from './index.less';

class Detial extends Component{
	constructor(props){
		super(props);
		this.componentName="";
	}
	componentDidMount(){
		const {id}=this.props.match.params;
        
	}

	componentWillReceiveProps(nextProps){

	}

	render(){
       return (
          <div className={Styles.wrapper}>
              
          </div>
       )
	}
}
export default Detial;
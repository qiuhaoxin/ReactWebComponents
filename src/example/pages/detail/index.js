import React,{Component} from 'react';
import Styles from './index.less';

import Switch from '../../../components/Switch/index.js';
console.log("Switch is "+Switch);
class Detial extends Component{
	constructor(props){
		super(props);
		this.componentName="";
	}
	state={
		showSwitch:false,
		showRadio:false,
	}
	componentDidMount(){
		const {id,title}=this.props.match.params;
		console.log("title is "+title);
        
	}

	componentWillReceiveProps(nextProps){

	}

	render(){
	   const {title}=this.props.match.params;
	   const {showSwitch}=this.state;
       return (
          <div className={Styles.wrapper}>
              <div>
                  {title}
              </div>
              <div>
                  <Switch />
              </div>
          </div>
       )
	}
}
export default Detial;
import React,{Component} from 'react';
import Styles from './index.less';

import Switch from '../../../components/Switch/index.js';

import Radio from '../../../components/Radio/index.js';

const RadioGroup=Radio.RadioGroup;

class Detial extends Component{
	constructor(props){
		super(props);
		this.componentName="";
	}
	state={
		showSwitch:false,
		showRadio:false,
		radioValue:'male',
	}
	changeState=(key,value)=>{
       this.setState({
       	  [key]:value,
       })
	}
	componentDidMount(){
		const {id,title}=this.props.match.params;
		switch(id){
			case '9':
               this.changeState('showSwitch',true);
			break;
			case '4':
                
			break;
			default:

			break;
		}
        
	}

	componentWillReceiveProps(nextProps){

	}
    handleSwitchChagne=(value)=>{
        console.log("value is "+value);
    }
    handleRadioChange=(value)=>{
      
    }
	render(){
	   const {title}=this.props.match.params;
	   const {showSwitch,showRadio,radioValue}=this.state;
       return (
          <div className={Styles.wrapper}>
              <div>
                  {title}
              </div>
              <div style={{'visibility':showSwitch ? 'visible' : 'hidden'}}>
                  <Switch onChange={this.handleSwitchChagne}/>
              </div>
              <div>
                  <RadioGroup defaultValue={radioValue} onChange={this.handleRadioChange}>
                      <Radio value="male">男</Radio>
                      <Radio value="female">女</Radio>
                      <Radio value="no">不男不女</Radio>
                  </RadioGroup>
              </div>
          </div>
       )
	}
}
export default Detial;
////<RadioGroup defaultValue={radioValue} onChange={this.handleRadioChange}>
                 // </RadioGroup>
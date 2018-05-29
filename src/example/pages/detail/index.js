import React,{Component} from 'react';
import Styles from './index.less';

import Switch from '../../../components/Switch/index.js';

import Radio from '../../../components/Radio/index.js';

import Button from '../../../components/Button/index.js';

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
		showList:false,
		showBtn:false,
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
                this.changeState('showRadio',true);
			break;
			case '6':
               this.changeState('showList',true);
			break;
			case '10':
               this.changeState('showBtn',true);
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
    handleBtnClick=(e)=>{
       console.log(" you click me!");
    }
	render(){
	   const {title}=this.props.match.params;
	   const {showSwitch,showRadio,radioValue,showBtn}=this.state;
       return (
          <div className={Styles.wrapper}>
              <div>
                  {title}
              </div>
              <div style={{'display':showSwitch ? 'block' : 'none'}}>
                  <Switch onChange={this.handleSwitchChagne}/>
              </div>
              <div style={{'display':showRadio ? 'block' : 'none'}}>
                  <RadioGroup defaultValue={radioValue} onChange={this.handleRadioChange}>
                      <Radio value="male">男</Radio>
                      <Radio value="female">女</Radio>
                      <Radio value="no">不男不女</Radio>
                  </RadioGroup>
              </div>
              <div style={{'display':showBtn ? 'block' : 'none'}}>
                  <Button onClick={this.handleBtnClick}>默认样式</Button>
                  <Button type='primary' styleObj={{border:'none',color:'#fff',marginTop:'20px'}}>保存</Button>
                  <Button styleObj={{marginTop:'20px',background:'red',color:'#fff',border:'none'}}>取消</Button>
              </div>
          </div>
       )
	}
}
export default Detial;
////<RadioGroup defaultValue={radioValue} onChange={this.handleRadioChange}>
                 // </RadioGroup>
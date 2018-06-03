import React,{Component} from 'react';
import Styles from './index.less';

import Switch from '../../../components/Switch/index.js';

import Radio from '../../../components/Radio/index.js';

import Button from '../../../components/Button/index.js';

import ActionSheet from '../../../components/ActionSheet/index.js';

import Stepper from '../../../components/Stepper/index.js';

import Segment from '../../../components/Segment/index.js';

const RadioGroup=Radio.RadioGroup;

class Detial extends Component{
	constructor(props){
		super(props);
		this.componentName="";
    this.actionSheetData=[
       {id:1,text:'删除'},
       {id:2,text:'跳转'},
       {id:3,text:'保存'},
    ];
    this.limit={min:0,max:10};

    this.segmentData=[
       {text:'Segment1'},
       {text:'Segment2'},
       {text:'Segment3'},
    ],
    this.segmentData1=[
       {text:'Segment1'},
       {text:'Segment2'},
    ]
	}
	state={
		showSwitch:false,
		showRadio:false,
		radioValue:'male',
		showList:false,
		showBtn:false,
    showActionSheet:false,
    actionSheetShow:false,
    showStepper:false,
    showSegment:false,
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
      case '11':
             this.changeState('showActionSheet',true);
      break;
      case '12':
             this.changeState('showStepper',true);
      break;
      case '13':
             this.changeState('showSegment',true);
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

    handleActionSheetClick=()=>{
        console.log("showActionSheet");
        this.changeState('actionSheetShow',true);
    }
    handleActionSheetItemClick=(item)=>{
         const {id,text}=item;
         console.log("sdfdsdsf");
         this.changeState('actionSheetShow',false);
    }
    handleSegmentChange=(item)=>{
       console.log("item is "+JSON.stringify(item));
    }
	render(){
	   const {title}=this.props.match.params;
	   const {showSwitch,showRadio,radioValue,showBtn,showActionSheet,actionSheetShow,showStepper,showSegment}=this.state;
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

              <div style={{'display':showActionSheet ? 'block' : 'none'}}>
                  <Button type='primary' onClick={this.handleActionSheetClick}>ActionSheet</Button>
                  <ActionSheet data={this.actionSheetData} onItemClick={this.handleActionSheetItemClick} visible={actionSheetShow}></ActionSheet>
              </div>

              <div style={{'display':showStepper ? 'block' : 'none'}}>
                  <div>
                      <div>

                      </div>
                      <Stepper start={0} offset={2}></Stepper>
                  </div>

                  <div>
                     <Stepper start={1} offset={1} leftIndicatorDisabled={true}></Stepper>
                  </div>

                  <div>
                     <Stepper start={1} offset={1} limit={this.limit}></Stepper>
                  </div>
              </div>

              <div style={{'display':showSegment ? 'block' : 'none'}}>
                  <div style={{width:'90%',margin:'40px auto'}}>
                      <Segment data={this.segmentData} activeEl={this.segmentData[0].id}/>
                  </div>

                  <div style={{margin:'40px auto',width:'200px'}}>
                      <Segment data={this.segmentData1} activeEl={this.segmentData[0].id} onChange={this.handleSegmentChange}/>
                  </div>

                  <div style={{margin:'40px auto',width:'200px'}}>
                      <Segment data={this.segmentData1} activeEl={this.segmentData[0].id} disable={true}/>
                  </div>

              </div>
          </div>
       )
	}
}
export default Detial;
////<RadioGroup defaultValue={radioValue} onChange={this.handleRadioChange}>
                 // </RadioGroup>
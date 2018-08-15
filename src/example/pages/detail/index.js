import React,{Component} from 'react';
import PropTypes from 'prop-types';
//import Style from './index1.less';
 import './index.less';


 import Switch from '../../../components/Switch/index.js';

import Radio from '../../../components/Radio/index.js';

import Button from '../../../components/Button/index.js';

import ActionSheet from '../../../components/ActionSheet/index.js';

import Stepper from '../../../components/Stepper/index.js';

import Segment from '../../../components/Segment/index.js';

import Icon from '../../../components/Icon/index.js';

import TabPage from '../../../components/TabPage/index.js';

import Header from '../../../components/Header/index.js';

import PageViewer from '../../../components/PageViewer/index.js';

import Popover from '../../../components/Popover/index.js';

import Badge from '../../../components/Badge/index.js';

import Image from '../../../components/Image/index.js';

import View from '../../../components/View/index.js';

import Collapse from '../../../components/Accordion/index.js';

import ListView from '../../../components/ListView/index.js';

import Modal from '../../../components/Modal/index.js';


 const Panel=Collapse.CollapsePanel;
//import Collapse,{Panel} from '../../../components/Accordion/index.js';


const RadioGroup=Radio.RadioGroup;

import List from '../../../components/List/index.js';
const ListItem=List.Item;

const personImg=require('../../images/haoxin_qiu.jpg');

function genData(pIndex=0){
  const dataArr=[];
  // for(let i=0;i<20;i++){
  //   dataArr.push(`row-${(pIndex * 20) + i}`);
  // }
    dataArr.push({"FID":1,"FName":"测试计划类型名称","FCREATTIME":"2018-08-15T06:24:04.000Z","FMARK":"测试计划类型备注"});
  return dataArr;
}

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
    this.dataSource=new ListView.DataSource({
      rowHasChanged:(row1,row2)=>row1!==row2
    })
    this.segmentData=[
       {text:'Segment1'},
       {text:'Segment2'},
       {text:'Segment3'},
    ];
    this.segmentData1=[
       {text:'Segment1'},
       {text:'Segment2'},
    ];
    this.tabData=[
       {id:1,type:'icon',icon:'e914',text:'商品',icon_click:'e913'},
       {id:2,type:'icon',icon:'e919',text:'购物车',icon_click:'e918'},
       {id:3,type:'icon',icon:'e91b',text:'文件夹',icon_click:'e91a'},
       {id:4,type:'icon',icon:'e905',text:'订单',icon_click:'e904'},
    ];
    this.state={
    showSwitch:false,
    showRadio:false,
    radioValue:'male',
    showList:false,
    showBtn:false,
    showActionSheet:false,
    actionSheetShow:false,
    showStepper:false,
    showSegment:false,
    showIcon:false,
    showTabPage:false,
    showHeader:false,
    showPageViewer:false,
    showPopover:false,
    showBadge:false,
    showImage:false,
    showView:false,
    showAccordion:false,
    showListView:false,
    dataSource:this.dataSource,
    showModal:false,
  }
	}

  changeState=(key,value)=>{
       this.setState({
          [key]:value,
       })
  }
  handlePopoverItem=()=>{
     console.log("handlePopoverItem");
  }
  handlerLT=()=>{
    return (
      <ul className={`popover-list`}>
         <li onClick={()=>this.handlePopoverItem()}>选择一</li>
         <li onClick={()=>this.handlePopoverItem()}>选择二</li>
      </ul>
    )
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
      case '14':
             this.changeState('showIcon',true);
      break;
      case '15':
             this.changeState('showTabPage',true);
      break;
      case '16':
             this.changeState('showHeader',true);
      break;
      case '17':
             this.changeState('showPageViewer',true);
      break;
      case '18':
             this.changeState('showPopover',true);
      break;
      case '19':
             this.changeState('showBadge',true);
      break;
      case '20':
             this.changeState('showImage',true);
      break;
      case '21':
             this.changeState('showView',true);
      break;

      case '23':
            this.changeState('showAccordion',true);
      break;
      case '24':
           setTimeout(()=>{
              this.setState({
                showListView:true,

                dataSource:this.state.dataSource.cloneWithRows(genData()),
              })
           },600);

      break;
      case '25':
          this.changeState('showModal',true);
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
    handleRenderSlavePage=()=>{
      return (
         <div>
            <Button type='primary'>test</Button>
         </div>  
      )
    }
    renderTagView=()=>{

    }
    handleViewLoadMore=(fn)=>{
        setTimeout(function(){
           if(fn)fn();
        },2000)
    }
	render(){
	   const {title,id}=this.props.match.params;
	   const {showSwitch,showRadio,radioValue,showBtn,showActionSheet,actionSheetShow,showStepper,showSegment,showIcon,showTabPage,
      showHeader,showPageViewer,showPopover,showBadge,showImage,showView,showList,showAccordion,showListView,
      showModal}=this.state;
       return (
          <div className={'detail-wrapper'}>
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

              <div style={{'display':showIcon ? 'flex' : 'none','flexDirection':'row',width:'100%','flexWrap':'wrap'}}>
                  <Icon config={{icon:'e900',text:'add',iconStyle:{fontSize:'45px'}}}/>
                  <Icon config={{icon:'e901',text:'close',iconStyle:{fontSize:'45px'}}}/>
                  <Icon config={{icon:'e902',text:'collection_fill',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e903',text:'collection',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e904',text:'computer_fill',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e905',text:'computer',iconStyle:{fontSize:'25px'}}}/>

                  <Icon config={{icon:'e906',text:'delete_fill',iconStyle:{fontSize:'45px'}}}/>
                  <Icon config={{icon:'e907',text:'download',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e908',text:'edit',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e909',text:'eit',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e90a',text:'enter',iconStyle:{fontSize:'25px'}}}/>

                  <Icon config={{icon:'e90b',text:'export',iconStyle:{fontSize:'45px'}}}/>
                  <Icon config={{icon:'e90c',text:'import',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e90d',text:'like_fill',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e90e',text:'like',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e90f',text:'location',iconStyle:{fontSize:'25px'}}}/>

                  <Icon config={{icon:'e910',text:'logout',iconStyle:{fontSize:'45px'}}}/>
                  <Icon config={{icon:'e911',text:'more',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e912',text:'other',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e913',text:'qrcode_fill',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e914',text:'qrcode',iconStyle:{fontSize:'25px'}}}/>

                  <Icon config={{icon:'e915',text:'refresh',iconStyle:{fontSize:'45px'}}}/>
                  <Icon config={{icon:'e916',text:'return',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e917',text:'search',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e918',text:'systemprompt_fill',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e919',text:'systemprompt',iconStyle:{fontSize:'25px'}}}/>


                  <Icon config={{icon:'e91a',text:'trash_fill',iconStyle:{fontSize:'45px'}}}/>
                  <Icon config={{icon:'e91b',text:'trash',iconStyle:{fontSize:'25px'}}}/>
                  <Icon config={{icon:'e91c',text:'warning',iconStyle:{fontSize:'25px'}}}/>
    
              </div>

              <div style={{'display':showTabPage ? 'block' : 'none'}}>
                   <TabPage
                      slavePage={this.handleRenderSlavePage}
                   >
                      <View>
                        <div style={{marginTop:'50px'}}>
                            Segment
                        </div>
                        <div style={{marginTop:'250px'}}>
                           <Segment data={this.segmentData} activeEl={this.segmentData[0].id}/>
                        </div>
                        <div style={{marginTop:'450px'}}>
                           <Button type='primary'>Test</Button>
                        </div>
                      </View>
                   </TabPage>
              </div>
              <div style={{'display':showHeader ? 'block' : 'none'}}>
                   <Header title={'Header'}/>
              </div>
              <div style={{'display':showPageViewer ? 'block' : 'none'}}>
                    <PageViewer
                      tabData={this.tabData}
                    >

                    </PageViewer>
              </div>
              <div style={{'display':showPopover ? 'block' : 'none'}}>
                  <Popover content={this.handlerLT}>
                      <Button type='primary'>LT</Button>
                  </Popover>
              </div>
              <div style={{'display':showBadge ? 'block' : 'none'}}>
                  <Badge/>
                  <Badge text={5} wrapperStyle={{marginLeft:'40px'}}/>
                  <Badge text={'大优惠'}/>
              </div>
              <div style={{display:showImage ? 'block' : 'none'}}>
                  <Image imgSrc={personImg} imgStyle={{width:'100px',height:'100px'}}/>
              </div>
              <div style={{display:showView ? 'block' : 'none'}}>
                  <View 
                    onLoadMore={this.handleViewLoadMore}
                  >
                     <div style={{marginTop:'30px'}}>
                        test view
                     </div>
                     <div style={{marginTop:'80px'}}>
                         <Button type='primary'>测试</Button>
                     </div>
                  </View>
              </div>

              <div style={{display:showList ? 'block' : 'none'}}>
                  <List
                    renderHeader={()=><div>header</div>}
                  >
                     <ListItem extra={'extra content'}>
                         This is list item
                     </ListItem>
                  </List>

                  <List
                    renderHeader={
                      ()=><div>test</div>
                    }
                  >
                    <ListItem
                       arrow={'horizontal'}
                       thumb={'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'}
                    >
                       text
                    </ListItem>
                    <ListItem
                       arrow={'horizontal'}
                       extra={'extra content'}
                    >
                       text2
                    </ListItem>
                  </List>
              </div>
              <div style={{display:showAccordion ? 'block' : 'none'}}>
                  <Collapse>
                      <Panel header={'test Accordion'}>
                          <List>
                             <ListItem extra={'extra content'}>
                                 This is list item
                             </ListItem>
                          </List>
                      </Panel>
                  </Collapse>
              </div>
              <div style={{display:showListView ? 'block' : 'none'}}>
                  <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    style={{ height: 200, border: '1px solid #ccc', margin: 10 }}
                    renderHeader={() =>
                      <button onClick={() => this.lv.scrollTo(0, 100)}>scrollTo(0, 100)</button>}
                    renderRow={rowData => <div style={{ padding: 16 }}>{rowData}</div>}
                    onEndReachedThreshold={10}
                  >

                  </ListView>
              </div>
              <div style={{display:showAccordion ? 'block' : 'none'}}>
                 <Collapse prefixCls="accordion" defaultActiveKey="0" activeKey='0' className="my-accordion" accordion={true}>
                     <Panel header={"test for Accordion"} arrow={true}>
                         <List>
                            <ListItem >
                                 text
                            </ListItem>
                            <ListItem >
                                 text1
                            </ListItem>
                            <ListItem >
                                 text2
                            </ListItem>
                            <ListItem >
                                 text3
                            </ListItem>
                         </List>
                     </Panel>
                     <Panel header={"test for Accordion2"} arrow={true}>
                         <List>
                            <ListItem>
                                 text 2
                            </ListItem>
                         </List>
                     </Panel>
                 </Collapse>
              </div>
          </div>
       )
	}
}
export default Detial;




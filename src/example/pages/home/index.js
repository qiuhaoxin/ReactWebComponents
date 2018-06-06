import React,{Component} from 'react';
import {Redirect,withRouter} from 'react-router-dom';
import {is,fromJS} from 'immutable';
import Styles from './index.less';
import NineCell from '../../../components/NineCell/index.js';

import Dialog from '../../../components/Dialog/index.js';

import Loading from '../../../components/Loading/index.js';

import Tip from  '../../../components/Tip/index.js';//提示toask

import Stepper from '../../../components/Stepper/index.js';//

const NineCellItem=NineCell.Item;
class Home extends Component{
	constructor(props){
		super(props);
		this.nineCellData=[
            {title:'Dialog',id:1},
            {title:'Loading',id:2},
            {title:'Select',id:3},
            {title:'Radio',id:4},
            {title:'Tab',id:5},
            {title:'List',id:6},
            {title:'Tip',id:7},
            {title:'SearchBar',id:8},
            {title:'Switch',id:9},
            {title:'Button',id:10},
            {title:'ActionSheet',id:11},
            {title:'Stepper',id:12}, 
            {title:'Segment',id:13},
            {title:'Icon',id:14},
            {title:'TabPage',id:15},
            {title:'Header',id:16},
            {title:'PageViewer',id:17},
            {title:'Popover',id:18},
		]
	}
    state={
        showDialog:false,
        showLoading:false,
        showTip:false,
    }
	componentDidMount(){

	}
	componentWillReceiveProps(nextProps){

	}
  handleNineCellClick=(item)=>{
        const id=item.id;
        switch(id){
            case 1:
               this.setState({
                  showDialog:true,
               })
            break;
            case 2:
               this.setState({
                  showLoading:true,
               })
            break;
            case 7:
               this.setState({
                  showTip:true,
               })
            break;
            default:
              this.props.history.push('/detail/'+id+"/"+item.title);
            break;

        }
    }
    handleDialogOK=()=>{
       this.setState({
        showDialog:false,
       })
    }
    handleDialogCancel=()=>{
        this.setState({
            showDialog:false,
        })
    }
	render(){
    const {showDialog,showLoading,showTip}=this.state;
		return (
          <div className={Styles.wrapper}>
             <NineCell data={this.nineCellData} columnNum={4}
                renderItem={
                	(item)=>{
                		return (
                            <NineCellItem key={item.id} itemData={item} itemClick={this.handleNineCellClick}>
                               <span>{item.title}</span>
                            </NineCellItem>
                		)
                	}
                }
             >
             </NineCell>
             <Dialog title="提醒" content="请明天到招行交100块！" visible={this.state.showDialog} 
             onOK={this.handleDialogOK} onCancel={this.handleDialogCancel}/>

             <Loading visible={showLoading} desc="加载中..."/>

             <Tip visible={showTip} tipContent="提交数据成功,请联系管理员到数据库后天查看" type='success' />
          </div>
		)
	}
}

export default withRouter(Home);
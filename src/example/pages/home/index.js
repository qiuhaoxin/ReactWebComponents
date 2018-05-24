import React,{Component} from 'react';
import {is,fromJS} from 'immutable';
import Styles from './index.less';
import NineCell from '../../../components/NineCell/index.js';

import Dialog from '../../../components/Dialog/index.js';

const NineCellItem=NineCell.Item;
export default class Home extends Component{
	constructor(props){
		super(props);
		this.nineCellData=[
            {title:'Dialog',id:1},
            {title:'Loading',id:2},
            {title:'Select',id:3},
            {title:'Radio',id:4},
            {title:'Tab',id:5},

		]
	}
    state={
        showDialog:false,
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
        }
    }

	render(){
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
             <Dialog title="提醒" content="请明天到招行交100块！" visible={this.state.showDialog} />
          </div>
		)
	}
}
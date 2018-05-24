import React,{Component} from 'react';
import {is,fromJS} from 'immutable';
import Styles from './index.less';
import NineCell from '../../../components/NineCell/index.js';

const NineCellItem=NineCell.Item;
export default class Home extends Component{
	constructor(props){
		super(props);
		this.nineCellData=[
            {title:'对话框',id:1},
            {title:'loading',id:2},
            {title:'Select',id:3},
            {title:'Radio',id:4},
            {title:'tab',id:5},

		]
	}
	componentDidMount(){

	}
	componentWillReceiveProps(nextProps){

	}
	render(){
		return (
          <div className={Styles.wrapper}>
             <NineCell data={this.nineCellData} columnNum={4}
                renderItem={
                	(item)=>{
                		return (
                            <NineCellItem key={item.id} itemData={item}>
                               <span>{item.title}</span>
                            </NineCellItem>
                		)
                	}
                }
             >
             </NineCell>
          </div>
		)
	}
}
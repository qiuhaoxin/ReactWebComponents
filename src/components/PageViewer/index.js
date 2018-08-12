import React,{Component} from 'react';
import PropTypes from 'prop-types';
// import Styles from './index.less';
import Icon from '../Icon/index.js';
import './index.less';
import FooterView from './FooterView.js';

const prefixCls="pageviewer";
class PageViewer extends Component{
	constructor(props){
        super(props);
	}
	handleItemClick=(item)=>{
       console.log("item is "+JSON.stringify(item));
	}
	renderFooter=()=>{
		const {tabData}=this.props;
		if(tabData.length>4){
			console.error("导航标签不能超过四个");
			return;
		}
		return tabData.map(item=>{
			return (
                 <div onClick={()=>this.handleItemClick(item)} key={item.id} className={'pageviewer-tag'}>
                    <Icon config={{icon:item.icon,text:item.text,Style:{},icon_click:item['icon_click']}} />
                 </div>
			)
		})

	}
	render(){
		const {tabView}=this.props;
		return (
            <div className={'pageviewer-wrapper'}>
                 <div ref={el=>this.contentWrapper=el}>

                 </div>
                 <FooterView />
            </div>
		)
	}
}

PageViewer.defaultProps={
    tabView:null,
    tabData:[],
}
PageViewer.propTypes={
    tabView:PropTypes.func,
    tabData:PropTypes.array,
}
export default PageViewer;

/*
                 <div className={'pageviewer-footer'}>
                     {
                     	tabView ? tabView() : this.renderFooter()
                     }
                 </div>
*/
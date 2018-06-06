import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';
import Icon from '../Icon/index.js';

class PageViewer extends Component{
	constructor(props){
        super(props);
	}
	handleItemClick=(item)=>{

	}
	renderFooter=()=>{
		const {tabData}=this.props;
		if(tabData.length>4){
			console.error("导航标签不能超过四个");
			return;
		}

		return tabData.map(item=>{
			return (
                 <div onClick={()=>this.handleItemClick(item)} key={item.id} className={Styles.tag}><Icon config={{icon:item.icon,text:item.text,Style:{},icon_click:item['icon_click']}} /></div>
			)
		})

	}
	render(){
		const {tabView}=this.props;
		return (
            <div className={Styles.wrapper}>
                 <div ref={el=>this.contentWrapper=el}>

                 </div>
                 <div className={Styles.footer}>
                     {
                     	tabView ? tabView() : this.renderFooter()
                     }
                 </div>
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
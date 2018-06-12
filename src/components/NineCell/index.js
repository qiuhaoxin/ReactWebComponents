import React,{Component} from 'react';
import PropTypes from 'prop-types';
// import Styles from './index.less';
import './index.less';

const prefixCls="nc";
class NineCell extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	render(){
		const {data,renderItem,columnNum}=this.props;
		return (
           <div className={'nc-wrapper'}>
                {
                	data.map(item=>{
                		const styleObj={}
                		if(columnNum){
                          styleObj['width']=100 / columnNum +"%";
                		}
                    return  renderItem ? <div className={'nc-item'} key={item.id} style={styleObj}>{renderItem(item)}</div> : (<div key={item.id}><span>{item.title}</span></div>)
                	})
                }
           </div>     
		)
	}
}
//类型检测
NineCell.propTypes={
	data:PropTypes.array.isRequired,
	renderItem:PropTypes.func,
	columnNum:PropTypes.number,
}
NineCell.defaultProps={
	renderItem:null,
	columnNum:3,
}

class NineCellItem extends Component{
   constructor(props){
   	super(props);
   }
   handleItemClick=()=>{
       const {itemData,itemClick}=this.props;

       if(itemClick)itemClick(itemData);

   }
   render(){

   	  return (
          <div onClick={this.handleItemClick}>
             {
             	React.Children.map(this.props.children,child=>{
             		return (
             			<div>
             			   {child}
             			</div>
             		)
             	})
             }
          </div>
   	  )
   }
}
NineCellItem.propTypes={
  itemData:PropTypes.object.isRequired,
  itemClick:PropTypes.func,
}

NineCell.Item=NineCellItem;
export default NineCell;
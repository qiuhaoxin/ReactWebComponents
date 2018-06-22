import React,{Component} from 'react';
import PropTypes from 'prop-types';
import CollapsePanel from './Panel';
import classNames from 'classnames';
import './index.less';

function toArray(activeKey){
   let currentActiveKey=activeKey;
   if(!Array.isArray(currentActiveKey)){
   	   currentActiveKey=currentActiveKey ? [currentActiveKey] : [];
   }
   return currentActiveKey;
}

class Collapse extends Component{

	constructor(props){
		super(props);
		const {defaultActiveKey,activeKey}=this.props;
		let currentActiveKey=defaultActiveKey;
		if('activeKey' in this.props){
			currentActiveKey=activeKey;
		}
		this.state={
		   activeKey:toArray(currentActiveKey),
	    }

	}

	componentDidMount(){

	}
	componentWillReceiveProps(nextProps){

	}
	//
	handleItemClick=(key)=>{
       console.log("activeKey is "+key);
       const {accordion}=this.props;
       let {activeKey}=this.state;
       if(accordion){
          activeKey=activeKey[0]===key ? [] : [key];
       }else{
         activeKey=[...activeKey];
         const index=activeKey.indexOf(key);
         const isActive=index > -1;
         if(isActive){
           activeKey.splice(index,1);
         }else{
            activeKey.push(key);
         }
       }
      this.setActiveKey(activeKey);
	}
  setActiveKey=(activeKey)=>{
    console.log("setActiveKey");
    const {onChange,accordion}=this.props;
    if('activeKey' in this.props){
       console.log("true is activeKey");
       this.setState({activeKey});
    }
    if(onChange)onChange(accordion ? activeKey[0] : activeKey);
  } 
	getItems=()=>{
		const {activeKey}=this.state;
    console.log("activeKey is "+JSON.stringify(activeKey));
		//手风琴模式，只有一个Panel是展开的，一个展开其他的就收起
        const {children,accordion,prefixCls}=this.props;
        const newChildren=[];
        
        React.Children.forEach(children,(child,index)=>{
        	if(!child)return;

        	const key=child.key || String(index);

            //get props from child
        	const {header,headerClass,disabled,arrow}=child.props;
            let isActive=false;
            if(accordion){
               isActive=activeKey[0]===key;
            }else{
               isActive=activeKey.indexOf(key) > -1;
            }
            const props={
                key,
                header,
                headerClass,
                isActive,
                accordion,
                prefixCls,
                children:child.props.children,
                onItemClick:disabled ? null : ()=>this.handleItemClick(key),
            }
            newChildren.push(React.cloneElement(child,props));
        })

        return newChildren;
	}
    render(){
        const {prefixCls,className,style}=this.props;
        const collapseClassName=classNames({
          [`${prefixCls}`]:true,
          [`${className}`]:className,
        })
        return (
           <div className={collapseClassName} style={style}>
               {this.getItems()}
           </div>
        )
    }
}
Collapse.defaultProps={
   prefixCls:'accordion-',
}
Collapse.propTypes={
   prefixCls:PropTypes.string,
   children:PropTypes.any.isRequired,
}
Collapse.CollapsePanel=CollapsePanel;
export default Collapse;

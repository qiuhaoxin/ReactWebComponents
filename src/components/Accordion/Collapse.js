import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel';
import classNames from 'classnames';

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
	handleItemClick=(activeKey)=>{
       const {accordion}=this.props;
	}
	getItems=()=>{
		const {activeKey}=this.state;
		//手风琴模式，只有一个Panel是展开的，一个展开其他的就收起
        const {children,accordion}=this.props;
        const newChildren=[];
        
        React.Children.forEach(children,(child,index)=>{
        	if(!child)return;

        	const key=child.key || String(index);

            //get props from child
        	const {header,headerClass,disabled}=child.props;
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
                children:child.props.children,
                onItemClick:disabled ? null : ()=>this.handleItemClick(key),
            }
            newChildren.push(React.cloneElement(child,props));
        })

        return newChildren;
	}
    render(){
        const {}=this.props;
        return (
           <div className={} >
               {this.getItems()}
           </div>
        )
    }
}
Collapse.defaultProps={

}
Collapse.propTypes={

}
Collapse.CollapsePanel=Panel;
export default Collapse;
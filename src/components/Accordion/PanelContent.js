import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class PanelContent extends Component{
	constructor(props){
		super(props);
	}
	shouldComponentUpdate(nextProps){
		return this.props.isActive || nextProps.isActive;
	}
	render(){
	    const {forceRender,isActive,prefixCls,children,destroyInactivePanel}=this.props;
	    this._isActive=forceRender || isActive;
	    if(!this._isActive)return null;
	    const contentCls=classNames({
	    	[`${prefixCls}-content`]:true,
	    	[`${prefixCls}-content-active`]:isActive,
	    	[`${prefixCls}-content-inactive`]:!isActive,
	    });
	    const child=!forceRender && !isActive && destroyInactivePanel ? null : <div className={`${prefixCls}-content-box`}>{children}</div>
        console.log("child is "+child);
        return (
           <div className={contentCls}>
             {child}
           </div>
        )
	}
}

export default PanelContent;

PanelContent.propTypes={
	isActive:PropTypes.bool,
	children:PropTypes.any,
	destroyInactivePanel:PropTypes.bool,
	forceRender:PropTypes.bool,
	prefixCls:PropTypes.string,
}

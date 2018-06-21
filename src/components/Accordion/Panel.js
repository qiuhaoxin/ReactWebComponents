import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';
import Animate from 'rc-animate';
import PanelContent from './PanelContent';

class CollapsePanel extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	handleItemClick=()=>{
		const {onItemClick}=this.props;
        if(onItemClick){
        	onItemClick();
        }
	}
	render(){
		const {className,id,style,prefixCls,header,headerClass,children,isActive,
			showArrow,destroyInactivePanel,disabled,accordion,forceRender,openAnimation}=this.props;
		const headerClassName=classNames({
			[headerClass]:headerClass,
		},`${prefixCls}-header`);	
		const itemCls=classNames({
           [`${prefixCls}-item`]:prefixCls,
           [`${prefixCls}-item-active`]:isActive,
           [`${prefixCls}-item-disabled`]:disabled,
		},className);
		return (
          <div className={itemCls} style={style} id={id}>
              <div className={headerClassName} onClick={this.handleItemClick}
              >
                  {header}
              </div>
              <Animate
                 showProp='isActive',
                 exclusive
                 component=""
                 animation={openAnimation}
              >
                <PanelContent
                    prefixCls={prefixCls}
                    isActive={isActive}
                    destroyInactivePanel={destroyInactivePanel}
                    forceRender={forceRender}
                    
                >
                   {children}
                </PanelContent>
              </Animate>
          </div>
		)
	}
}

export default CollapsePanel;

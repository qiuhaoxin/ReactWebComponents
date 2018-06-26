import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ttrottle} from '../../utils/util';


class ScrollerView extends Component{
	constructor(props){
		super(props);

	}
	state={

	}
	componentDidMount(){
		const {onScroll,scrollEventThrottle,onLayout,useBodyScroll}=this.props;
		let handleScroll=e=>this.props.onScroll && this.props.onScroll(e,this.getMetrics);
		if(scrollEventThrottle){
			handleScroll=ttrottle(handleScroll,scrollEventThrottle);
		}
		this.handleScroll=handleScroll;

		this.onLayout=()=>onLayout({
			nativeEvent:{layout:{width:window.innerWidth,height:window.innerHeight}}
		})

		if(useBodyScroll){
           window.addEventListener('scroll',this.handleScroll);
           window.addEventListener('resize',this.onLayout);
		}else{
			this.ScrollViewRef.addEventListener('scroll',this.handleScroll);
		}

	}
	componentWillUnmount(){
		const {useBodyScroll}=this.props;
		if(useBodyScroll){
			window.removeEventListener('scroll',this.handleScroll);
			window.removeEventListener('resize',this.onLayout);

		}else{
			this.ScrollViewRef.removeEventListener('scroll',this.handleScroll);
		}
	}
	getMetrics=()=>{
		const {horizontal,useBodyScroll}=this.props;
		const isVertical=!horizontal;
		if(useBodyScroll){
			const scrollNode=document.scrollingElement ? document.scrollingElement : document.body;

			return {
				visibleLength:window[isVertical ? 'innerHeight' : 'innerWidth'],
				contentLength:this.ScrollViewRef ?
				this.ScrollViewRef[isVertical ? 'scrollHeight' : 'scrollWidth'] : 0,
				offset:scrollNode[isVertical ? 'scrollTop' : 'scrollLeft'],
			};
		}
		return {
			visibleLength:this.ScrollViewRef[isVertical?'innerHeight':'innerWidth'],
			contentLength:this.ScrollViewRef[isVertical?'scrollHeight':'scrollWidth'],
			offset:this.ScrollViewRef[isVertical?'scrollTop':'scrollLeft'],
		};
	}
	render(){
       const {children,className,prefixCls,pullToRefresh,style={},
       conentContainerStyle={},useBodyScroll}=this.props;

       const styleBase={
       	  position:'relative',
       	  overflow:'auto',
       	  WebkitOverflowScrolling:'touch',

       };

       const preCls=prefixCls||'';
       const containerProps={
       	   ref:el=>this.ScrollViewRef=el || this.ScrollViewRef,
       	   style:{...(useBodyScroll ? {} :styleBase),...style},
       	   className:className(className,`${preCls}-scrollview`),
       };
       const contentContainerProps={
       	   ref:el=>this.InnerScrollViewRef=el,
       	   style:{position:'absolute',minWidth:'100%',...conentContainerStyle},
       	   className:classNames(`${preCls}-scrollview`)
       }

       const clonePullToRefresh=isBody=>React.cloneElement(pullToRefresh,{
       	   getScrollContainer:isBody ? ()=>document.body :()=>this.ScrollViewRef,
       	   children
       });

       if(useBodyScroll){
       	  if(pullToRefresh){
       	  	 return {
       	  	 	<div {}>
                    {clonePullToRefresh(true)}
       	  	 	</div>
       	  	 };
       	  }
       	  return {
       	  	<div {...containerProps}>
                 {children}
       	  	</div>
       	  };
       }
       if(pullToRefresh){
          return (
	       	  <div {...containerProps}>
	             <div {...contentContainerProps}>
	                  {clonePullToRefresh()}
	             </div>
	       	  </div>
          )
       }
       return (
	       	  <div {...containerProps}>
	             <div {...contentContainerProps}>
	                  {children}
	             </div>
	       	  </div>
       )
	}
}

export default ScrollerView;


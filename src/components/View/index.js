import React,{Component} from 'react';
import './index.less';
import PropTypes from 'prop-types';

const prefixCls="view";
const ViewStatus={
    PULLDOWN:0,
    RELESETOREFRESH:1,
    REFRESHING:2,
}
class View extends Component{
   constructor(props){
   	 super(props);
   }
   state={
   	  initY:0,
   	  headerText:'下拉加载',

   }
   componentDidMount=()=>{
       const {headerHeight}=this.props;
       this.setState({
       	  initY:-headerHeight,
       })
   }
   getTouchEvents=()=>{
   	  const {onLoadMore}=this.props;
   	  return {
   	  	onTouchStart:e=>{
   	  		this.viewStatus=ViewStatus.PULLDOWN;
   	  		this.touchObject={
   	  			startX:e.touches[0].pageX,
   	  			startY:e.touches[0].pageY,
   	  		}
   	  	},
   	  	onTouchMove:e=>{
   	  		const _this=this;
   	  		const {headerHeight}=this.props;
   	  		//垂直  direction：-1 向下滑动   :1 向上滑动
   	  		const direction = this.swipeDirection(
	          this.touchObject.startX,
	          e.touches[0].pageX,
	          this.touchObject.startY,
	          e.touches[0].pageY
	        );
	        const distX=e.touches[0].pageX - this.touchObject.startX;
	        const distY=e.touches[0].pageY - this.touchObject.startY;

	        if(Math.abs(distY) < 6 && Math.abs(distx) < 6){
	        	return;
	        }
	        if(direction!==0){
	        	e.preventDefault();
	        }
	        if(Math.abs(distX) > Math.abs(distY)){
               return;
	        }
            let length=Math.abs(e.touches[0].pageY - this.state.initY);
            length=Math.ceil(length / 5);
            //console.log("length is "+length);
            this.touchObject={
              startX: this.touchObject.startX,
	          startY: this.touchObject.startY,
	          endX: e.touches[0].pageX,
	          endY: e.touches[0].pageY,
	          length,
	          direction
            }
            this.setState(preState=>{
            	//console.log("length is "+this.touchObject.length);
            	const y=preState.initY + this.touchObject.length * -1 * this.touchObject.direction;
            	let headerRefresh='';
            	//console.log("y is "+y);
                if(y>Math.abs(headerHeight)){
                    this.viewStatus=ViewStatus.RELESETOREFRESH;
                    headerRefresh="释放刷新";
                }
            	return ({
            		initY:y,
            		headerText:headerRefresh ? headerRefresh : preState.headerText,
            	})
            })
   	  	},
   	  	onTouchEnd:e=>{
   	  		const _this=this;
            const {initY}=this.state;
            const {headerHeight,onLoadMore}=this.props;
            if(this.viewStatus==ViewStatus.RELESETOREFRESH){
                this.setState(preState=>{
                    _this.setTransition(200);
                    _this.viewStatus=ViewStatus.REFRESHING;
                	return ({
                       initY:0,
                       headerText:'正在刷新...'
                	})
                },()=>{
                	setTimeout(function(){
                       _this.setTransition(0);
                       _this.loading();
                	},200)
                    
                })
            }else if(this.viewStatus===ViewStatus.PULLDOWN){
            	this.setState(preState=>{
            		_this.setTransition(200);
            		return ({
            			initY:-headerHeight,

            		})
            	})
            }
   	  	}
   	  }  
   }
   loading=()=>{
   	  const _this=this;
   	  const {onLoadMore,headerHeight}=this.props;
   	  if(onLoadMore)onLoadMore(function(){
          _this.setState(preState=>{
          	_this.setTransition(200);
          	return ({
          	 initY:-headerHeight,
          	 headerText:'下拉加载',
          })
        },()=>{
           setTimeout(function(){
           	   _this.viewStatus=ViewStatus.PULLDOWN;//重置初始状态
           	   _this.setTransition(0);

           },200)
        })
   	  });

   }
   setTransition=(time)=>{
   	   time=time+"ms";
       if(this.wrapper){
       	  this.wrapper.style['transition']=`transform ${time} ease`;
       }
   }

   swipeDirection(x1, x2, y1, y2) {
	    const xDist = x1 - x2;
	    const yDist = y1 - y2;
	    const r = Math.atan2(yDist, xDist);
	    let swipeAngle = Math.round(r * 180 / Math.PI);

	    if (swipeAngle < 0) {
	      swipeAngle = 360 - Math.abs(swipeAngle);
	    }
	    if (swipeAngle <= 45 && swipeAngle >= 0) {
	      return 1;
	    }
	    if (swipeAngle <= 360 && swipeAngle >= 315) {
	      return 1;
	    }
	    if (swipeAngle >= 135 && swipeAngle <= 225) {
	      return -1;
	    }
	    if (this.props.vertical === true) {
	      if (swipeAngle >= 35 && swipeAngle <= 135) {
	        return 1;
	      } else {
	        return -1;
	      }
	    }

	    return 0;
  }
   renderHeader=()=>{
   	  let leafDivs=[];
   	  const {headerHeight}=this.props;
   	  const {headerText}=this.state;
   	  let headerStyle={};
   	  if(headerHeight){
        // headerStyle['transform']=`translate3d(0,-${headerHeight}px,0)`;
   	  }
      for(let i=0;i<12;i++){
		const classNameStr=`loading-leaf  loading-leaf-${i}`;
		leafDivs.push(
				//className={`${Styles['loading-leaf']} ${Styles[`loading-leaf-${i}`]}`}
		    <div key={'loadingLeaf'+i} className={classNameStr}>

			</div>
		);
	  } 
   	  return (
         <div className={`${prefixCls}-header`} style={headerStyle}>
              <div className={'loading'} style={{visibility:this.viewStatus==ViewStatus.REFRESHING ? 'visible' : 'hidden'}}>
                 {leafDivs}
              </div>
              <div>{headerText}</div>
         </div>
   	  )
   }
   render(){
   	  const {children,headerHeight}=this.props;
   	  const touches=this.getTouchEvents();
   	  const {initY}=this.state;

      let wrapperStyle={};
      if(headerHeight){
      	wrapperStyle['transform']=`translate3d(0,${initY}px,0)`;
      }
   	  return (
          <div className={`${prefixCls}-wrapper`} style={wrapperStyle} {...touches} ref={el=>this.wrapper=el}>
             {this.renderHeader()}
             <div className={`${prefixCls}-body`}>
                 {children}
             </div>
          </div>


   	  )
   }
}
View.propTypes={
    showHeader:PropTypes.bool,//是否显示/隐藏头部
    headerHeight:PropTypes.number,
    children:PropTypes.oneOfType([PropTypes.node,PropTypes.element]).isRequired,
}
View.defaultProps={
    showHeader:false,
    headerHeight:50,
    vertical:true,
}
export default View;


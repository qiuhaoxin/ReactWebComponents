import React,{Component} from 'react';
import PropTypes from 'prop-types';
//import Styles from './index.less';
import './index.less';


class Tip extends Component{
	constructor(props){
		super(props);
		this.isShowing=false;
		this.timeoutId=-1;
	}
	state={
		visible:false,
	}
    componentDidMount(){

    }
    componentWillReceiveProps(nextProps){
        if(!this.isShowing && nextProps.visible){
        	this.setState(preState=>{
        		this.isShowing=true;
        		this.startTimeout();
        		return ({
        			visible:true,
        		})
        	})
        }
    }
  startTimeout=()=>{
       const _this=this;
       const {hideTime,onHideCallback}=this.props;
       clearTimeout(this.timeoutId);
       this.timeoutId=setTimeout(function(){
       	  _this.isShowing=false;
          _this.setState({
          	visible:false,
          },()=>{
            onHideCallback && onHideCallback();
          })
       },hideTime)
    }
	render(){
		const {tipContent}=this.props;
		const {visible}=this.state;
        const style={visibility:visible?'visible':'hidden'};
		return (
           <div className={'tip-wrapper'} style={style}>
             <div className={'tip-content'}>
                 {tipContent}
             </div>
           </div>
		)
	}
}

Tip.propTypes={
  tipContent:PropTypes.string.isRequired,
  mode:PropTypes.number,
  type:PropTypes.string,
  visible:PropTypes.bool,
  hideTime:PropTypes.number,
  onHideCallback:PropTypes.func,
}

Tip.defaultProps={
	tipContent:'',
	mode:0,//mode :tip 展现的方式  0：离底部200px 展示  1:顶部展示
	type:'success',   //type : tip的类型 ：success成功提示   error  失败提示
	visible:false,
	hideTime:2000, //tip消失时间
  onHideCallback:null,
}
export default Tip;
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';

class Segment extends Component{
	constructor(props){
		super(props);
		this.middleId=0;
	}
	state={
		activeElId:0,
		segmentData:[],
	}
	componentDidMount(){
         const {activeEl,data}=this.props;
         let tempArr=[];

         if('id' in data[0]){
		 	 tempArr=data;
		 }else{
		 	this.middleId=1;
			for(let i=0,len=data.length;i<len;i++){
				let obj=data[i]
				obj['id']=i;
				tempArr.push(obj);
			}
		 }
         this.setState({
         	activeElId:activeEl,
         	segmentData:tempArr,
         })
	}
    handleItemClick=(item)=>{
       const {disable,onChange}=this.props;
       if(disable){
       	 return;
       }
       if(onChange)onChange(item);
       this.setState({
       	  activeElId:item.id,
       })

    }
	render(){
		const {data,disable}=this.props;
        const {activeElId,segmentData}=this.state;
        const styleObj={width:100/data.length+'%'};
        const disableClass=disable ? 'sgm-disable' : ''
		return (
            <div className={Styles.wrapper}>
                <ul className={Styles[disableClass]}>
                   {
                   	segmentData.map(item=>{
                   		let classNameStr="";
                   		let middleClass="";
                        if(item.id==activeElId){
                           classNameStr="sgm-active";
                        }
                        if(item.id==this.middleId && segmentData.length==3){
                            middleClass='sgm-middel';
                        }
                   		return (
                            <li key={item.id} style={styleObj} className={`${Styles[classNameStr]} ${Styles[middleClass]}`} onClick={()=>this.handleItemClick(item)}>
                               <span>{item.text}</span>
                            </li>
                   		)
                   	})
                   }
                </ul>
            </div>
		)
	}
}

Segment.defaultProps={
    data:[],
    activeEl:0,
    disable:false,
    onChange:null

}
Segment.propTypes={
    data:PropTypes.array.isRequired,
    activeEl:PropTypes.number,
    disable:PropTypes.bool,
    onChange:PropTypes.func,

}
export default Segment;
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';
import InfiniteScroll from 'react-infinite-scroller';

//弹框列表

class List extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	render(){
		const {children}=this.props;
		return (
           <div className={Styles.wrapper}>
               <InfiniteScroll

               >
                   {children}
               </InfiniteScroll>
           </div>
		)
	}
}

List.propTypes={

}

class ListItem extends Component{
     constructor(props){
     	super(props);
     }
     render(){
     	return (
           <div>

           </div>
     	)
     }
}

export default List;

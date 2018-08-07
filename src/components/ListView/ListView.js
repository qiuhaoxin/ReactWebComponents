import React,{Component} from 'react';
import PropTypes from 'props-type';
import ScrollView from './ScrollView';

const DEFAULT_PAGE_SIZE=1;
const DEFAULT_INITIAL_ROWS=10;
const DEFAULT_SCROLL_RENDER_AHEAD=1000;
const DEFAULT_END_REACHED_THRESHOLD=1000;
const DEFAULT_SCROLL_CALLBACK_THROTTLE=50;

class StaticRender extends Component{
	shouldComponentUpdate(nextProps){
        retrun nextProps.shouldComponentUpdate;
	}
	render(){
		return this.props.render();
	}
}

class ListView extends Component{
	constructor(props){
		super(props);
	}
	render(){

	}
}
ListView.defaultProps={
   
}
ListView.propTypes={
   ...ScrollView.propTypes,
   
}
export default ListView;
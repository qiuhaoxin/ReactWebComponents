import React,{Component} from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import './index.less';
import classnames from 'classnames';


//弹框列表
const prefixCls='list';
class List extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
	render(){
		const {children,renderHeader,renderFooter}=this.props;
   // console.log("children is in list is "+children);
		return (
           <div className={`${prefixCls}-wrapper`}>
              <div className={`${prefixCls}-header`}>{renderHeader ? renderHeader() : null}</div>
              <div className={`${prefixCls}-content`}>
                {children}
              </div>
              {renderFooter ? renderFooter() : null}
           </div>
		)
	}
}
List.defaultProps={
   renderHeader:null,
   renderFooter:null,
}
List.propTypes={
   renderHeader:PropTypes.func,
   renderFooter:PropTypes.func,
   children:PropTypes.oneOfType([PropTypes.node,PropTypes.element]),
}

const listItemPrefixCls='list-item';
class ListItem extends Component{
     constructor(props){
     	super(props);
     }
     render(){
      const {children,arrow,thumb}=this.props;
     	return (
           <div className={`${listItemPrefixCls}`}>
              {
                 thumb ? (
                   <div className={`${listItemPrefixCls}-thumb`}> 
                     {typeof thumb=='string' ? <img src={thumb} /> : thumb}
                  </div>
                 ) : null 
              }
              {
                 React.Children.map(this.props.children,(child)=>{
                    return (<div>{child}</div>)
                 })
              }
              {
                 arrow ? <div className={'arrow'}></div> : null
              }
           </div>
     	)
     }
}
ListItem.propTypes={
    arrow:PropTypes.oneOf(['horizontal','down','up']),

}
ListItem.defaultProps={
    arrow:null,
}
List.Item=ListItem;
export default List;


/*

import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class ListExample extends React.Component {
  state = {
    disabled: false,
  }

  render() {
    return (<div>
      <List renderHeader={() => 'Basic Style'} className="my-list">
        <Item extra={'extra content'}>Title</Item>
      </List>
      <List renderHeader={() => 'Subtitle'} className="my-list">
        <Item arrow="horizontal" multipleLine onClick={() => {}}>
          Title <Brief>subtitle</Brief>
        </Item>
        <Item
          arrow="horizontal"
          multipleLine
          onClick={() => {}}
          platform="android"
        >
          ListItem （Android）<Brief>There may have water ripple effect of <br /> material if you set the click event.</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => {}}
        >
          Title <Brief>subtitle</Brief>
        </Item>
      </List>
      <List renderHeader={() => 'Customized Right Side（Empty Content / Text / Image）'} className="my-list">
        <Item>Title</Item>
        <Item arrow="horizontal" onClick={() => {}}>Title</Item>
        <Item extra="extra content" arrow="horizontal" onClick={() => {}}>Title</Item>
        <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
          Title <Brief>subtitle</Brief>
        </Item>
      </List>
      <List renderHeader={() => 'Align Vertical Center'} className="my-list">
        <Item multipleLine extra="extra content">
          Title <Brief>subtitle</Brief>
        </Item>
      </List>
      <List renderHeader={() => 'Icon in the left'}>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
        >My wallet</Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => {}}
          arrow="horizontal"
        >
          My Cost Ratio
        </Item>
      </List>
      <List renderHeader={() => 'Text Wrapping'} className="my-list">
        <Item data-seed="logId">Single line，long text will be hidden with ellipsis；</Item>
        <Item wrap>Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text</Item>
        <Item extra="extra content" multipleLine align="top" wrap>
          Multiple line and long text will wrap. Long Text Long Text Long Text
        </Item>
        <Item extra="no arrow" arrow="empty" className="spe" wrap>
          In rare cases, the text of right side will wrap in the single line with long text. long text long text long text
        </Item>
      </List>
      <List renderHeader={() => 'Other'} className="my-list">
        <Item disabled={this.state.disabled} extra="" onClick={() => { console.log('click', this.state.disabled); this.setState({ disabled: true }); }}>Click to disable</Item>
        <Item>
          <select defaultValue="1">
            <option value="1">Html select element</option>
            <option value="2" disabled>Unable to select</option>
            <option value="3">option 3</option>
          </select>
        </Item>
      </List>
    </div>);
  }
}

ReactDOM.render(<ListExample />, mountNode);

*/

import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Styles from './index.less';

class Accordion extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){

	}
  getItems=()=>{
     
  }
	render(){
     return (
          <div>

          </div>
     )
	}
}
Accordion.defaultProps={
   
}
Accordion.propTypes={

}

class AccordionPanel extends Component{
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
Accordion.Panel=AccordionPanel;
export default Accordion;



// import { Accordion, List } from 'antd-mobile';

// class AccordionExmple extends React.Component {
//   onChange = (key) => {
//     console.log(key);
//   }
//   render() {
//     return (
//       <div style={{ marginTop: 10, marginBottom: 10 }}>
//         <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
//           <Accordion.Panel header="Title 1">
//             <List className="my-list">
//               <List.Item>content 1</List.Item>
//               <List.Item>content 2</List.Item>
//               <List.Item>content 3</List.Item>
//             </List>
//           </Accordion.Panel>
//           <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
//           <Accordion.Panel header="Title 3" className="pad">
//             text text text text text text text text text text text text text text text
//           </Accordion.Panel>
//         </Accordion>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<AccordionExmple />, mountNode);
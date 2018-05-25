import React,{Component} from 'react';

export function asyncComponent(importComponent){
   class MyComponent extends Component{
   	  constructor(props){
   	  	super(props);

   	  }
   	  state={
   	  	component:null,
   	  }
   	  async componentDidMount(){
          const {default:component}=await importComponent();
          this.setState({
          	component,
          })
   	  }
   	  render(){
          const MyComponent=this.state.component;
          return MyComponent ? <MyComponent {...this.props} /> : null;
   	  }
   }
   return MyComponent;
}

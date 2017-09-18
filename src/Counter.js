import React,{Component} from 'react';
import store from './store.js';
import * as Actions from './Actions.js'

class Counter extends Component {
     constructor(props){
         super(props);
         this.state = this.getOwnState();
         this.getOwnState = this.getOwnState.bind(this);
         this.onChange = this.onChange.bind(this);
         this.onCounterChange = this.onCounterChange.bind(this)
     }

     getOwnState() {
         return {
             counter:store.getState()[this.props.caption]
         }
     }

     onChange(){
         this.setState(this.getOwnState())
     }

     componentDidMount(){
         store.subscribe(this.onChange)
     }

     componentWillUnmount(){
         store.unsubscribe(this.onChange)
     }

     onCounterChange(){
         store.dispatch(Actions.increment(this.props.caption))
     }

     render() {
         return (
             <div>
                 <button onClick={this.onCounterChange}>+</button>
                 counter:{this.state.counter}
             </div>
         )
     }
}

export default Counter;
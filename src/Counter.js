import React,{Component} from 'react';

class Counter extends Component {
     constructor(props){
         super(props);
         this.state = {
             counter:0
         };
         this.onCounterChange = this.onCounterChange.bind(this);
     }

     onCounterChange(){
         this.setState(() =>{
             return {
                 counter:this.state.counter+1
             };

         });
         this.props.onCounter();
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
import React,{Component} from 'react';
import TemplateInput from'./TemplateInput.js';

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            template:'',
            scale:'c'
        }
    }

    toCelsius(fahrenheit) {
        
    }

   render() {
       return (
           <div>
               <TemplateInput scale="c"/>
               <TemplateInput scale="f"/>
           </div>
       )
   }
}

export default Calculator

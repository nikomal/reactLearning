import React,{Component} from 'react';
import TemplateInput from'./TemplateInput.js';
import BoilingVerdict from "./BoilingVerdict";


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) *5 /9
}

function toFahrenheit(celsius) {
    return (celsius*9 / 5 ) +32
}

function tryConvert(template,convert) {
    const input = parseFloat(template);
    if(Number.isNaN(template)) return '';
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            template:'',
            scale:'c'
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

   render() {
       const scale = this.state.scale;
       const temperature = this.state.temperature;
       const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
       const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
       return (
           <div>
               <TemplateInput scale="c" temperature = {celsius} onTemperatureChange = {this.handleCelsiusChange}/>
               <TemplateInput scale="f"  temperature = {fahrenheit} onTemperatureChange = {this.handleFahrenheitChange}/>
               <BoilingVerdict celsius = {celsius}/>
           </div>
       )
   }
}

export default Calculator

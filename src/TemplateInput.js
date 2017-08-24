import React,{Component} from 'react';

const scaleNames = {
    c:'Celsius',
    f:'Fahrenheit'
};

class TemplateInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            template:''
        }
    }
    handleChange(e){
        this.setState({template:e.target.value})
    }

    render(){
        const template = this.state.template;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>输入一个摄氏温度(单位{scaleNames[scale]})</legend>
                <input type="text"
                       value={template}
                       onChange = {this.handleChange}/>
            </fieldset>
        )
    }
}

export default TemplateInput;
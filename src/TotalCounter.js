import React, {Component} from 'react';
import Counter from './Counter.js'


class TotalCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.addCounter = this.addCounter.bind(this);
    }

    addCounter() {
        this.setState(() => {
            return {
                counter:this.state.counter + 1
            }
        })
    }

    render() {
        return (
            <div>
                <p>总数为:{this.state.counter}</p>
                <Counter onCounter = {this.addCounter}/>
                <Counter onCounter = {this.addCounter}/>
                <Counter onCounter = {this.addCounter}/>
            </div>
        )
    }
}

export default TotalCounter
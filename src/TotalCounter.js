import React, {Component} from 'react';
import Counter from './Counter.js'
import store from './store.js'


class TotalCounter extends Component {
    constructor(props) {
        super(props);
        this.state = this.getOwnState();
        this.getOwnState = this.getOwnState.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    getOwnState(){
        const state = store.getState();
        let sum = 0;
        for(let key in state) {
            if(state.hasOwnProperty(key)) {
                sum+=state[key]
            }
        }
        return {sum:sum};
    }

    onChange() {
        this.setState(this.getOwnState())
    }

    componentDidMount() {
        store.subscribe(this.onChange)
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange)
    }



    render() {
        return (
            <div>
                <p>总数为:{this.state.sum}</p>
                <Counter caption='first'/>
                <Counter caption='second'/>
                <Counter caption='third'/>
            </div>
        )
    }
}

export default TotalCounter
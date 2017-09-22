import React, {Component} from 'react';
import Counter from './Counter.js';
import {connect} from 'react-redux'


function TotalCounter({sum}) {
    return (
        <div>
            <p>总数为:{sum}</p>
            <Counter caption='first'/>
            <Counter caption='second'/>
            <Counter caption='third'/>
        </div>
    )
}


function mapStateToProps(state) {
    let sum = 0;
    for (let key in state) {
        if (state.hasOwnProperty(key)) {
            sum += state[key]
        }
    }
    return {
        sum:sum
    }
}



export default connect(mapStateToProps)(TotalCounter)
import React,{Component} from 'react';

class BoilingVerdict extends Component {
    render() {
        return (
            this.props.celsius>=100?<p>水开了</p>:<p>水没有开</p>
        )
    }
}

export default BoilingVerdict
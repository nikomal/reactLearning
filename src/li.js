import React ,{Component} from 'react';

class MyLi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:['五年高考','三年模拟'],
            books:props.books.map((book,index) => <li key={index}>{book}</li>)
        }
    }

    // componentDidMount() {
    //     this.setState((_,props) => {
    //         return {
    //             books:props.books.map((book) => <li>{book}</li>)
    //         }
    //     })
    // }

    render() {
        return <ul>{this.props.books.map((book,index) => <li key={index}>{book}</li>)}</ul>;
    }

}


export default MyLi
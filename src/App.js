import React, {Component} from 'react';
import './App.css';
import MyLi from './li.js';
import Calculator from './Calculator.js';
import TotalCounter from './TotalCounter.js'

const str = 'hello world!';


class MyButton extends Component {
    render() {
        return (
            <button>{this.props.buttonName}</button>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            number: 'hello',
            isLogin: false,
            books:['五年高考','三年模拟'],
        };
        this.selfClick = this.selfClick.bind(this);
        this.loginIn = this.loginIn.bind(this);
        this.loginOut = this.loginOut.bind(this);
    }

    selfClick() {
        console.log(this.state.number);
    }

    loginIn() {
        this.setState(() => {
            return {
                isLogin: true
            }
        });
    }

    loginOut() {
        this.setState(() => {
            return {
                isLogin: false
            }
        })
    }

    componentDidMount() {
        this.timeId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timeId)
    }


    tick() {
        this.setState((prevState, props) => {
            return {
                number: prevState.number + props.name
            }
        })
    }


    render() {
        let button = null;
        let isLogin = this.state.isLogin;
        if (isLogin) {
            button = <button onClick={this.loginOut}>退出登录</button>;
        } else {
            button = <button onClick={this.loginIn}>登录</button>
        }
        return (
            <div className="App">
                <h2 onClick={this.selfClick}>{str}</h2>
                <p>{this.props.name}</p>
                <p>{this.state.date.toLocaleTimeString()}</p>
                {button}
                {
                    isLogin && <p>欢迎女装大佬</p>
                }
                <MyButton buttonName = {this.props.name}/>
                <MyLi books = {this.state.books} />
                <Calculator/>
                <TotalCounter />
            </div>
        )
    }
}

export default App;

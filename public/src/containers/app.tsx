import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { connect } from 'react-redux';

import { Hello } from "../components/Hello";
import List from './List';
import Login from './Login';


interface LoginState {
    isLogin: String;
}



class App extends React.Component<LoginState, any> {

    render() {
        if (!this.props.isLogin) {
            return <Login />
        }


        return (
            <Router>
                <div>
                    <Route exact path='/' render={() => (
                        <>
                            <h3>首页</h3>
                            <ul>
                                <li><Link to='/hello'>hello</Link></li>
                                <li><Link to='/list'>list</Link></li>
                            </ul>
                        </>
                    )} />

                    <Route path='/hello' render={() => (
                        <Hello compiler="TypeScript" framework="React" />
                    )} />
                    <Route path='/list' component={List} />
                </div>
            </Router>
        )
    }
}


const propsToState = (state: any) => {
    return {
        isLogin: state.login
    }
}

export default connect<LoginState,any,any>(propsToState, null)(App);
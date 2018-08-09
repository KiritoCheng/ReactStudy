import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import { Hello } from "../components/Hello";
import List from '../containers/List';

export default class App extends React.Component {
    render() {
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
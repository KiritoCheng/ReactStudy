import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import { Hello } from "../components/Hello";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' render={() => (
                        <>
                            <h3>首页</h3>
                            <ul>
                                <Link to='/hello'>hello</Link>
                            </ul>
                        </>
                    )} />
                    <Route path='/hello' render={() => (
                        <Hello compiler="TypeScript" framework="React" />
                    )} />
                </div>
            </Router>
        )
    }
}
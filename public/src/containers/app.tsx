import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { connect } from 'react-redux';

import { Hello } from "../components/Hello";
import Book from './pages/Book';


interface AppDataProps {
    isLogin: boolean;
}



class App extends React.Component<AppDataProps, any> {

    render() {
        // if (!this.props.isLogin) {
        //     return <Login />
        // }


        return (
            <Router>
                <div>
                    <Route exact path='/' render={() => (
                        <>
                            <h3>首页</h3>
                            <ul>
                                <li><Link to='/hello'>hello</Link></li>
                                <li><Link to='/book'>BookPage</Link></li>
                            </ul>
                        </>
                    )} />

                    <Route path='/hello' render={() => (
                        <Hello compiler="TypeScript" framework="React" />
                    )} />
                    <Route path='/book' component={Book} />
                </div>
            </Router>
        )
    }
}


const mapToState = (state: any) => {
    return {
        isLogin: true
    }
}

export default connect<AppDataProps, any, any>(mapToState, null)(App);
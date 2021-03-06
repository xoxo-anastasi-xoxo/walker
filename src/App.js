import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './pages/Home'
import LogInPage from "./pages/LogInPage";
import Web from "./pages/Web";



class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/login' component={LogInPage}/>
                        <Route path='/web' component={Web}/>

                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
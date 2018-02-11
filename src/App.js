import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './pages/Home'
import Web from './pages/Web'
import FAQ from "./pages/FAQ";
import Downloads from "./pages/Downloads";
import LogInPage from "./pages/LogInPage";



class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/web' component={Web}/>
                        <Route exact path='/faq' component={FAQ}/>
                        <Route exact path='/download' component={Downloads}/>
                        <Route exact path='/login' component={LogInPage}/>

                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
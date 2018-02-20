import React, {Component} from 'react'
import Header from '../components/NewSite/Header/Header'
import {connect} from "react-redux";
import FirstLevel from "../components/NewSite/FirstLevel/FirstLevel";
import SecondLevel from "../components/NewSite/SecondLevel/SecondLevel";
import ThirdLevel from "../components/NewSite/ThirdLevel/ThirdLevel";

class Home extends Component {
    render() {
        return (
            <div className="page">
                <Header/>
                <FirstLevel/>
                <SecondLevel/>
                <ThirdLevel/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Home);
import React, {Component} from 'react'
import Header from '../components/Header/Header'
import Face from "../components/Face/Face";
import {connect} from "react-redux";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <Header/>
                <Face/>
                <About list={this.props.about_walker} title="Walker - это:"/>
                <About list={this.props.about_us} title="Наша команда"/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    about_walker: state.main_info.about_walker,
    about_us: state.main_info.about_us
});

export default connect(mapStateToProps)(Home);
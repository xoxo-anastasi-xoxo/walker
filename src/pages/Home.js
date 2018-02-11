import React, {Component} from 'react'
import Header from '../components/Site/Header/Header'
import Face from "../components/Site/Face/Face";
import {connect} from "react-redux";
import About from "../components/Site/About/About";
import Footer from "../components/Site/Footer/Footer";

class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <Header/>
                <Face/>
                <About list={this.props.about_walker} title="Почему именно Walker?"/>
                <About list={this.props.about_what} title="Что ты можешь найти здесь?"/>
                <About list={this.props.about_us} title="Наша команда"/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    about_walker: state.main_info.about_walker,
    about_what: state.main_info.about_what,
    about_us: state.main_info.about_us
});

export default connect(mapStateToProps)(Home);
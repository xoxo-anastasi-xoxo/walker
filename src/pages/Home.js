import React, {Component} from 'react'
import Header from '../components/NewSite/Header/Header'
import {connect} from "react-redux";
import Footer from "../components/NewSite/Footer/Footer";
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
                {/*<Face/>*/}
                {/*<About list={this.props.about_walker} title="Почему именно Walker?"/>*/}
                {/*<About list={this.props.about_what} title="Что ты можешь найти здесь?"/>*/}
                {/*<About list={this.props.about_us} title="Наша команда"/>*/}
                {/*<Footer/>*/}
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
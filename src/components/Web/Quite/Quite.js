import React, {Component} from "react"
import "./Quite.css"
import {connect} from "react-redux";
import InputMoment from "../Event/DatePicker/input-moment"
import '../Event/DatePicker/input-moment.css';
import moment from 'moment';


class Quite extends Component {
    state = {
    m: moment()
};

    handleChange = m => {
        this.setState({ m });
    };

    handleSave = () => {
        console.log('saved', this.state.m.format('llll'));
    };

    handleClick() {
        this.props.quite();
    }

    render() {
        return (
            <div className="quite">
                <div className="quite__inner">
                    <p className="quite__inner__q">Вы действительно хотите выйти?</p>
                    <div className="quite__inner__a">
                        <a className="quite__inner__a__no" href="/web"><div>Нет</div></a>
                        <a className="quite__inner__a__yes" href="/"><div>Да</div></a>
                    </div>
                </div>
                {/*<InputMoment*/}
                    {/*moment={this.state.m}*/}
                    {/*onChange={this.handleChange}*/}
                    {/*onSave={this.handleSave}*/}
                    {/*minStep={1} // default*/}
                    {/*hourStep={1} // default*/}
                    {/*prevMonthIcon="ion-ios-arrow-left" // default*/}
                    {/*nextMonthIcon="ion-ios-arrow-right" // default*/}
                {/*/>*/}
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    quite: () => dispatch({
        type: 'QUITE'
    })
});

export default connect(null, mapDispatchToProps)(Quite);
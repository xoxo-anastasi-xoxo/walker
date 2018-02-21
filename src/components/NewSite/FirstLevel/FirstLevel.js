import React, {Component} from "react"
import "./FirstLevel.css"
import Line from "./Line";
import {connect} from "react-redux";
import Item from "./Item";

class FirstLevel extends Component {
    render() {
        return (
            <div  id ="p1" className="n_first-level">
                <div className="n_first-level__right"> </div>
                <div className="n_first-level__left">
                    <Line/>
                    {
                        this.props.list.map((key, index) => <Item index={index} key={index} text={key}/>)
                    }
                </div>
                {/*<a className="scrollto n_first-level__button" href="#p2"></a>*/}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    list: state.main_info.merits
});

export default connect(mapStateToProps)(FirstLevel);
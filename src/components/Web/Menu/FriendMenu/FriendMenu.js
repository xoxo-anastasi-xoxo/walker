import React, {Component} from "react"
import "../Menu.css"
import {connect} from "react-redux";
import FriendCard from "./FriendCard";

class FriendMenu extends Component {
    render() {
        return (
            <div className="menu__friend">
                {this.props.friendList.map((key, index) => {
                    return <FriendCard key={index} index={index} friend={key}/>;
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    friendList: state.user.friendList
});

export default connect(mapStateToProps)(FriendMenu);
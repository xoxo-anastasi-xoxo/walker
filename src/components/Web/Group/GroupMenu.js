import React, {Component} from "react"
import "./Group.css"
import {connect} from "react-redux";
import GroupCard from "./GroupCard"

class GroupMenu extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile-inner">
                    <div className="profile-inner__top"
                         style={{backgroundImage: 'url("' + this.props.userAva + '")'}}> </div>
                    <div className="profile-inner__user">
                        <p className="profile-inner__user__name">{this.props.userName}</p>
                        <div className="profile-inner__user__ava"
                             style={{backgroundImage: 'url("' + this.props.userAva + '")'}}> </div>
                    </div>
                    <div className="profile-inner__bottom">
                        <div className="profile-inner__bottom__menu">
                            <div className="profile-inner__bottom__menu__item-active">Мои группы</div>
                        </div>
                        <div  className="profile-inner__bottom__list">
                            {this.props.list.map((key, index) => <GroupCard index={index} key={index} el={key}/>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userName: state.user.userName,
    userAva: state.user.userAva,
    list: state.user.userGroup

});


export default connect(mapStateToProps)(GroupMenu);
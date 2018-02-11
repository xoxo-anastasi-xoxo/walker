import React, {Component} from "react"
import {connect} from 'react-redux'
import SocialNetwork from "./SocialNetwork"
import "./Log.css"

class SocialNetworkList extends Component {
  render() {
    return (
      <div className="login__list">
        {this.props.list.map((key, index) => {
            return <SocialNetwork key={index} index={index} to={key.to} name={key.name} src={key.src}/>;
        })}
      </div>
    );

  }
}

const mapStateToProps = state => ({
  list: state.main_info.socialNetworks
});

export default connect(mapStateToProps)(SocialNetworkList);
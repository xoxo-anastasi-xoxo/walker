import React from 'react';
import "./Log.css"

class SocialNetwork extends React.Component {
    render() {
        return (
            <a key={this.props.index} href={this.props.to}>
                <button className="login__list__button" type="button">
                    <img className="login__list__button__image" alt={this.props.name} src={this.props.src}/>
                </button>
            </a>
        );
    }
}

export default SocialNetwork;
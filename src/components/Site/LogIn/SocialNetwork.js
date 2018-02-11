import React from 'react';
import "./SocialNetwork.css"

class SocialNetwork extends React.Component {
    render() {
        return (
            <a key={this.props.index} href={this.props.to}>
                <button className="button" type="button">
                    <img className="button__image" alt={this.props.name} src={this.props.src}/>
                </button>
            </a>
        );
    }
}

export default SocialNetwork;
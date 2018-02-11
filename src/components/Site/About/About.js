import React, {Component} from "react"
import "./About.css"
import List from "./List";

class About extends Component {
    render() {
        return (
            <div className="about">
                <h1 className="about__title">{this.props.title}</h1>
                <List list={this.props.list}/>
            </div>
        );
    }
}

export default About;
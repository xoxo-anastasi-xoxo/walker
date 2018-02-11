import React, {Component} from "react"
import "./About.css"
import ListItem from "./ListItem"

class List extends Component {
    render() {
        return (
            <div className="about__list">
                {
                    this.props.list.map((key, index) => <ListItem index={index} key={index} img={key.img} title={key}/>)
                }
            </div>
        );
    }
}

export default List;
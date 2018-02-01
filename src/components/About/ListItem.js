import React, {Component} from "react"
import "./About.css"

class ListItem extends Component {
    render() {
        let style = {backgroundImage: "url('"+ this.props.img +"')"};

        return (
            <div className="about__list__item">
                <div style={style} className="about__list__item__img"></div>
                {/*<img className="about__list__item__img" alt={this.props.title.name} src={this.props.img}/>*/}
                {this.props.title.responsibility ?
                    <div>
                        <p className="about__list__item__text" style={{fontWeight: 'bold'}}>{this.props.title.name}</p>
                        <p className="about__list__item__text">{this.props.title.responsibility}</p>
                    </div>
                    :
                    <p className="about__list__item__text">{this.props.title.title}</p>
                }
            </div>
        );
    }
}

export default ListItem;
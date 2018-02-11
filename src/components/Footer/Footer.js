import React, {Component} from "react"
import "./Footer.css"
import {connect} from "react-redux";
import Column from "./Column";
import Main from "./Main";

class Footer extends Component {
    render() {
        // console.log( this.props.footer);
        return (
            <div className="container-f">
                <div className="footer">
                    <div className="footer-up">
                        {
                            // this.props.footer.map((key, index) => <Column index={index} key={index} item={key}/>)
                        }
                    </div>
                    <Main/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    footer: state.main_info.footer
});

export default connect(mapStateToProps)(Footer);
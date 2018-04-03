import React, {Component} from "react"
import "./Header.css"
import {connect} from "react-redux";

class Header extends Component {
    componentWillMount() {
        window.onscroll = this.bb.bind(this)
    }

    bb = function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var h = document.documentElement.clientHeight > 500 ? document.documentElement.clientHeight : 500;
        this.props.changeAnchor(scrolled, h);
    };

    render() {


        let href = this.props.scrollHeight > this.props.documentHeight - 10 ?
            this.props.scrollHeight > 2 * this.props.documentHeight - 10 ?
                this.props.scrollHeight > 3 * this.props.documentHeight - 10 ? "#p0" : "#p3" : "#p2" : "#p1";

        let style = this.props.scrollHeight > 3 * this.props.documentHeight - 10 ? "more scrollto n_header__button" : "scrollto n_header__button";

        return (
            <div id="p0" className="n_header">
                <div className="n_header__top">
                    <a href="/" className="n_header__top__title">
                        Walker
                    </a>
                    <a href="/login" className="n_header__top__button">Попробовать</a>
                </div>
                <div className="n_header__bottom">
                    <div className="n_header__bottom__title">Explore the&nbsp;new&nbsp;way to&nbsp;create&nbsp;events
                    </div>
                    <div className="n_header__bottom__text">
                        Общение - это жизнь.<br/>Живи и радуйся жизни со старыми друзьями и новыми знакомыми.<br/>Создай свое первое мероприятие прямо сейчас!
                    </div>
                </div>

                <a className={style} href={href}> </a>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    documentHeight: state.main_info.documentHeight,
    scrollHeight: state.main_info.scrollHeight
});


const mapDispatchToProps = dispatch => ({
    changeAnchor: (scroll, height) => dispatch({
        type: 'CHANGE_ANCHOR',
        scrol: scroll,
        height: height
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
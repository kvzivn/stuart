import React, { Component, PropTypes } from 'react'

export default class Hamburger extends Component {
    static propTypes = {
        animate : PropTypes.bool,
        onClick : PropTypes.func
    };

    render() {
        const {
            animate,
            onClick
        } = this.props

        const close = animate ? 'Hamburger--close' : ''

        return (
            <div className={`Hamburger ${close}`} onClick={onClick}>
                <span className="Hamburger-top"></span>
                <span className="Hamburger-middle"></span>
                <span className="Hamburger-bottom"></span>
            </div>
        )
    }
}

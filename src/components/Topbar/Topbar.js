import React, { Component, PropTypes } from 'react'
import ReactSVG from 'react-svg'
import { Link } from 'react-router'
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu'
import HorizontalMenuItem from '../HorizontalMenu/HorizontalMenuItem'
import Button from '../Button/Button'
import logo from '../../images/stuart-logo.svg'

export default class Topbar extends Component {
    static propTypes = {
        children : PropTypes.node,
        onClick  : PropTypes.func,
        items    : PropTypes.array.isRequired,
        active : PropTypes.bool
    }

    render() {
        const {
            children,
            onClick,
            items,
            active
        } = this.props

        return (
            <div className="Topbar">
                <div className="Topbar-primary">
                    <Link className="Topbar-logo" to="/">
                        <ReactSVG path={logo} />
                    </Link>
                    <div className="Topbar-menu">
                        <HorizontalMenu onClick={onClick} items={items} active={active} />
                    </div>
                </div>
                <div className="Topbar-secondary">
                    <HorizontalMenuItem to="/" label="Become a courier" />
                    <Button primary>Sign in</Button>
                </div>
                {children}
            </div>
        )
    }
}

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import ReactSVG from 'react-svg'
import dropdownIcon from '../../images/arrow-down.svg'
import Dropdown from './Dropdown'

const HorizontalMenuItem = ({ label, onClick, active, items }) => {
    return items
        ? (
            <div
                onClick={onClick}
                className={`HorizontalMenuItem Dropdown-wrapper ${active ? 'active' : ''}`}>
                <a className="Dropdown-trigger">
                    {label}
                    <ReactSVG className={'Dropdown-icon'} path={dropdownIcon} />
                </a>
                <Dropdown items={items} />
            </div>
        )
        : <Link className="HorizontalMenuItem" to="/">{label}</Link>
}

HorizontalMenuItem.propTypes = {
    label    : PropTypes.string,
    active   : PropTypes.bool,
    onClick  : PropTypes.func,
    items    : PropTypes.array
}

export default HorizontalMenuItem

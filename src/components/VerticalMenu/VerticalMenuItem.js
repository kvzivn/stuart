import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const VerticalMenuItem = ({ label, href }) => (
    <li className="VerticalMenuItem">
        <Link className="VerticalMenuItem-link" to={href}>{label}</Link>
    </li>
)

VerticalMenuItem.propTypes = {
    label : PropTypes.string,
    href  : PropTypes.string
}

export default VerticalMenuItem

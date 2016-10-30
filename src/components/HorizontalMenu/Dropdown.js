import React, { PropTypes } from 'react'

const Dropdown = ({ items }) => (
    <div className="Dropdown">
        <ul className="Dropdown-list">
            {items.map((item, index) =>
                <li className="Dropdown-item" key={index}>
                    <a className="Dropdown-link" href={item.href}>{item.label}</a>
                </li>
            )}
        </ul>
    </div>
)

Dropdown.propTypes = {
    items : PropTypes.array
}

export default Dropdown

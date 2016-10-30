import React, { PropTypes } from 'react'
import HorizontalMenuItem from './HorizontalMenuItem'

const HorizontalMenu = ({ items, onClick, active }) => (
    <nav className="HorizontalMenu" role="navigation">
        {items.map((item, index) =>
            <HorizontalMenuItem
                key={index}
                {...item}
                onClick={onClick}
                active={active}
            />
        )}
    </nav>
)

HorizontalMenu.propTypes = {
    items   : PropTypes.array.isRequired,
    onClick : PropTypes.func,
    active  : PropTypes.bool
}

export default HorizontalMenu


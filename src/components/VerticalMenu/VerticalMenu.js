import React, { PropTypes } from 'react'
import VerticalMenuItem from './VerticalMenuItem'

const VerticalMenu = ({ items }) => (
    <ul className="VerticalMenu" role="navigation">
        {items.map((item, index) =>
            <VerticalMenuItem
                key={index}
                {...item}
            />
        )}
    </ul>
)

VerticalMenu.propTypes = {
    items : PropTypes.array.isRequired
}

export default VerticalMenu


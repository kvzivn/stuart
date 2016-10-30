import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { fonts, media } from '../globals'

const styles = ({ size }) => css`
    font-family: ${fonts.secondary};
    font-size: ${.5 + 1.25 * (1 / size)}rem;
    margin-top: ${.75 * (1 / size)}rem;
    margin-bottom: ${.25 * (1 / size)}rem;
    color: #fff;
    text-align: center;

    ${media.tabletUp} {
        font-size: ${.5 + 2 * (1 / size)}rem;
    }
`

const Heading = styled(({ size, children, ...props }) => {
    return React.createElement(`h${size}`, props, children)
})`${styles}`

Heading.propTypes = {
    size     : PropTypes.number,
    children : PropTypes.any
}

Heading.defaultProps = {
    size: 1
}

export default Heading

import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'

import { colors, fonts, media } from '../globals'

const styles = ({ disabled, size }) => {
    return css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: ${props => props.large ? '.65em 3em' : '.5em 1em'};
        background: ${props => props.primary ? colors.primary : 'transparent'};
        color: ${colors.secondary};
        font-family: ${fonts.primary};
        font-size: ${props => props.large ? '18px' : '14px'};
        border: ${props => props.primary ? 'none' : `2px solid ${colors.secondary}`};
        border-radius: 4px;
        text-decoration: none;
        cursor: ${disabled ? 'default' : 'pointer'};
        appearance: none;
        transition: box-shadow .15s ease-in-out;
        pointer-events: ${disabled && 'none'};

        &:hover, &:focus, &:active {
            box-shadow: 0 0 0 2px ${props => props.primary ? colors.primary : colors.secondary};
        }

        &:focus {
            outline: none;
        }

        ${media.tabletUp} {
            padding: ${props => props.large ? '.65em 6em' : '.5em 1em'};
        }
    `
}

const StyledLink = styled(Link)`${styles}`
const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

const Button = ({ type, ...props, to, href }) => {
    if (to) {
        return <StyledLink {...props} />
    } else if (href) {
        return <Anchor {...props} />
    }
        return <StyledButton {...props} type={type} />
}

Button.propTypes = {
    disabled : PropTypes.bool,
    size     : PropTypes.number,
    type     : PropTypes.string,
    to       : PropTypes.string,
    href     : PropTypes.string
}

Button.defaultProps = {
    type: 'button'
}

export default Button

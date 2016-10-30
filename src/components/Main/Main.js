import React from 'react'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'

const Main = () => {
    return (
        <main className="Main">
            <Heading size={1}>Deliver fast, pay less!</Heading>
            <Heading size={2}>On-demand delivery for businesses</Heading>
            <div className="Main-button">
                <Button primary large>Get started</Button>
            </div>
        </main>
    )
}

export default Main

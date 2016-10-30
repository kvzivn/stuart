import React, { Component } from 'react'
import navItems from './navItems'
import sidebarItems from './sidebarItems'
import Topbar from './Topbar/Topbar'
import Button from './Button/Button'
import VerticalMenu from './VerticalMenu/VerticalMenu'
import Main from './Main/Main'
import Hamburger from './Hamburger/Hamburger'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sidebarOpen        : false,
            topbarDropdownOpen : false
        }
    }

    onToggleSidebar = () => {
        this.setState({ sidebarOpen : !this.state.sidebarOpen })
    }

    onToggleDropdown = () => {
        this.setState({ topbarDropdownOpen : !this.state.topbarDropdownOpen })
    }

    onWrapperClick = () => {
        if (this.state.topbarDropdownOpen) {
            this.setState({ topbarDropdownOpen : !this.state.topbarDropdownOpen })
        }
    }

    render() {
        const { sidebarOpen, topbarDropdownOpen } = this.state

        const sidebar = sidebarOpen ? 'Sidebar--visible' : ''

        return (
            <div className="Wrapper" onClick={this.onWrapperClick}>
                <aside className={`Sidebar ${sidebar}`}>
                    <div className="Sidebar-container">
                        <Button primary>Sign in</Button>
                        <VerticalMenu items={sidebarItems.items} />
                    </div>
                </aside>
                <Topbar
                    onClick={this.onToggleDropdown}
                    active={topbarDropdownOpen}
                    items={navItems.items}
                >
                    <Hamburger onClick={this.onToggleSidebar} animate={sidebarOpen} />
                </Topbar>
                <Main />
            </div>
        )
    }
}

export default App;

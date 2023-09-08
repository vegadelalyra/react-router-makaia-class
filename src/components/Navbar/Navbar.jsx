import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import reactLogo from '../../assets/react.svg'
import './Navbar.css'
import { Button } from '../Button/Button'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>
                    React
                    <img
                        src={reactLogo}
                        className='logo react'
                        alt='React logo'
                    />
                </h1>
                <div
                    className='menu-icon'
                    onClick={this.handleClick}>
                    <i
                        className={
                            this.state.clicked
                                ? 'fas fa-times'
                                : 'fas fa-hamburger'
                        }></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a
                                    className={item.className}
                                    href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar

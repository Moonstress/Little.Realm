import React, { useState, useEffect } from 'react';
import "../Header.css"; // Adjust the path if necessary
import logo from '../imgs/logo.png';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header className={isScrolled ? "announcement scrolled" : "announcement"}>
                <nav className="nav">
                    <ul>
                        <li><a href="#">Attractive Text Here</a></li>
                    </ul>
                </nav>
            </header>
            <header className={isScrolled ? "header scrolled" : "header"}>
            <div></div>
                <div className="nav">
                    
                    <div className="logo">
                        <img src={logo} alt="Logo" className={isScrolled ? "shrink" : ""} />
                    </div>
                    <ul>
                        <li><a href="#">New</a></li>
                        <li><a href="#">Sale</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="nav">
                    <ul>
                        <li><a href="#">Search</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Cart</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;

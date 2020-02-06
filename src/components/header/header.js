import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div className="nav-container">
            {/* <img className="header-logo" src={"../../assets/images/ESLLLogo.webp"} alt="espark logo" /> */}
            <div className="header-logo"><Link className="more-articles-link" to="/">eSpark</Link></div>
                <nav>
                    <span className="header-nav-list">
                        <span className="header-nav-link"><Link className="more-articles-link" to="/hyp1">hypothesis1</Link></span>
                        <span className="header-nav-link"><Link className="more-articles-link" to="/hyp2">hypothesis2</Link></span>
                        <span className="header-nav-link"><Link className="more-articles-link" to="/hyp3">hypothesis3</Link></span>
                        <span className="header-nav-link"><Link className="more-articles-link" to="/hyp4">hypothesis4</Link></span>
                        <span className="header-nav-link"><Link className="more-articles-link" to="/hyp5">hypothesis5</Link></span>
                    </span>
                </nav>
            </div>
            <aside className="header-login-container">
                {/* header-login-link is purely cosmetic and won't work */}
                <span className="header-login-link"></span>
            </aside>
        </header>
    )
}

export default Header;
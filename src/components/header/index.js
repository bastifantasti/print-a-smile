import React from 'react';

import './_header.scss';

const Header = () => (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="header-content">
                      <span className="header-logo"><h1>Print a Smile :)</h1>// made with (=^･ｪ･^=))ﾉ彡☆</span>
                        <nav className="header-nav">
                            <ul className="header-nav-list">
                                <li className="header-nav-list-item">
                                    <a href="#features">What it is?</a>
                                </li>
                                <li className="header-nav-list-item">
                                    <a href="#howto">♥ Submit a smile</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;

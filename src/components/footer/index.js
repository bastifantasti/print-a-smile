import React from 'react';
import Icon from '../icon';
import Github from '../icon/github.icon';
import './_footer.scss';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-content">
                      created by:
                        <a
                            href="https://medium.com/@bastifantasti"
                            target="_blank"
                            rel="noopener noreferrer">
                            Sebastian Felix Schwarz
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;

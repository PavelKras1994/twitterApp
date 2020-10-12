import React from 'react';

import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__navigation">
                    <NavLink
                        to={`/`}
                        className="header__link">
                        Random posts
                    </NavLink>
                    <NavLink
                        to={`/user`}
                        className="header__link">
                        My page
                    </NavLink>
                </div>
                <div>  </div>
            </div>

        </div>
    );
};

export default Header;

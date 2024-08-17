import React from 'react';
import { Input } from 'antd';
import favorites from '../assets/favorites.svg';
import update from '../assets/update.svg';
import settings from '../assets/settings.svg';
import user from '../assets/user.png';
import "../nav/Nav.css";

const { Search } = Input;

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__wrapper">
          <div className="nav__info">
            <h1>MORENT</h1>
            <Search 
              className="nav__search" 
              placeholder="Search something here" 
            />
          </div>
          <div className="nav__action">
            <img src={favorites} alt="Favorites" />
            <img src={update} alt="Update" />
            <img src={settings} alt="Settings" />
            <img src={user} alt="User" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

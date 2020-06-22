import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuElements from '../MenuElements.json';
import '../Styles/TopNavBar.css';

const TopNavBar = (props) => {
    const [isConnected] = useState(true);

    return (
        <div className='desktop-top-nav-bar'>
            {isConnected
                ? MenuElements.navigationElements.filter(element => element.needLogIn || element.text === 'Envoyer ma recette').map(e => {
                    return (
                        <NavLink key={e.text} exact to={e.link} className={`topnav-bar-link-${e.slug}`}>
                            <div className='topnav-bar-element-container'>
                                <p>{e.text}</p>
                            </div>
                        </NavLink>
                    );
                })
                : MenuElements.navigationElements.filter(element => element.needLogOut || element.text === 'Envoyer ma recette').map(e => {
                    return (
                        <NavLink key={e.text} exact to={e.link} className={`topnav-bar-link-${e.slug}`}>
                            <div>
                                <p>{e.text}</p>
                            </div>
                        </NavLink>
                    );
                })}
        </div>
    );
};

export default TopNavBar;

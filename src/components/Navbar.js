import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../static/css/components/Navbar.css';
import MenuItems from './MenuItems';

// TODO: Try to use relative route for submenus
export default function Navbar({ isCreator, username }) {
    const navigate = useNavigate();

    const logOut = () => {
        sessionStorage.removeItem('user_data');
        navigate('/');
    };

    const navbarItems = [
        {
            title: 'Home',
            url: '/home',
        },
        {
            title: 'Turnamen',
            url: '/tournament',
            submenu: (isCreator) ? 
                [
                    {
                        title: 'Buat Turnamen',
                        url: '/tournament/create',
                    },
                    {
                        title: 'Lihat Turnamen',
                        url: '/tournament',
                    },
                ] : [
                    {
                        title: 'Lihat Turnamen',
                        url: '/tournament',
                    },
                ]
        },
      
    ];
    
    return (
        <div className='navbar-container'>
            <div className='navbar-brand-container'>
                <p>SI-TOURNEY</p>
            </div>
            <div className='navbar-menus-container'>
                <ul className='navbar-menus-list'>
                    {navbarItems.map((menu, idx) => <MenuItems items={menu} key={idx} />)}
                </ul>
            </div>
            <div className='navbar-user-container'>
                <div className='navbar-user-content'>
                    <p>Halo, <strong>{username}</strong></p>
                    <div className='navbar-user-logout'>
                        <Link to='/'><img onClick={logOut} src={require('../static/img/logout.png')} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

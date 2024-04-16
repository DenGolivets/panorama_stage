'use client';

import React, { useState, useEffect } from 'react';
import './topBar.css';

const TopBar = () => {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);

    return (
        <div
            id='topbar'
            className={`d-flex align-items-center fixed-top ${
                scroll > 100 ? 'topbar-scrolled' : undefined
            }`}
        >
            <div className='container d-flex justify-content-center justify-content-md-between'>
                <div className='contact-info d-flex align-items-center'>
                    <i className='bi bi-phone d-flex align-items-center'>
                        <span>+ 0 0000 0000 0</span>
                    </i>
                    <i className='bi bi-clock d-flex align-items-center ms-4'>
                        <span>Mon-Sun: 12AM-22PM</span>
                    </i>
                </div>

                <div className='languages d-none d-md-flex align-items-center'>
                    <ul>
                        <li>EN</li>
                        <li>
                            <a href="!#">UA</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default TopBar;

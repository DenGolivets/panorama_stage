'use client';

import React, { useEffect } from 'react';
import GLightbox from 'glightbox';

import './hero.css';
import HeroBtn from '../components/HeroBtn';

const Hero = () => {

    useEffect(() => {
        new GLightbox({
            selector: '.glightbox',
        });
    }, []);

    return (
        <section id='hero' className='d-flex align-items-center'>
            <div 
                className='container position-relative text-center text-lg-start'
                data-aos='zoom-in'
                data-aos-delay='100'
            >
                <div className='row'>
                    <div className='col-lg-8'>
                        <h1>
                            Welcome to Panorama <span>Restaraunt</span>
                        </h1>
                        <h2>
                        Serving Scenic Delights: Panorama&apos;s Journey of taste, unfolding since 1970
                        </h2>
                        <div className='btns'>
                            <HeroBtn name='our menu' target='menu' />
                            <HeroBtn name='book a table' target='book-a-table' />
                        </div>
                    </div>
                    <div
                        className='col-lg-4 d-flex align-items-center justify-content-center position-relative'
                        data-aos='zoom-in'
                        data-aos-delay='200'
                    >
                        <a 
                            href="https://www.youtube.com/watch?v=ehcw-lpoRjs&ab_channel=Andronis"
                            className='glightbox play-btn'
                        ></a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;

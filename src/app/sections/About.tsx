import React from 'react';
import aboutImage from '../../../public/assets/images/about-bg.jpg'

import './about.css';
import Image from 'next/image';

const About = () => {
    return (
        <section id='about' className='about'>
            <div className='container' data-aos='fade-up'>
                <div className='row'>
                    <div
                        className='col-lg-6 order-1 order-lg-2'
                        data-aos='zoom-in'
                        data-aos-delay='100'
                    >
                        <div className='about-img'>
                            <Image src={aboutImage} alt='' />
                        </div>
                    </div>
                    <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content'>
                        <h3>
                        Once nestled on the edge of a rugged cliff overlooking the bustling city, Panorama Restaurant was more than just a dining experience it was a culinary haven suspended between earth and sky.
                        </h3>
                        <p className='fst-italic'>
                            Nights at Panorama were nothing short of magical.
                        </p>
                        <ul>
                            <li>
                                <i className='bi bi-check-circle'></i> Breathtaking Views: Panorama offers unparalleled panoramic views of the city, creating a unique and enchanting dining atmosphere.
                            </li>
                            <li>
                                <i className='bi bi-check-circle'></i> Culinary Excellence: Renowned chef Adrian Thornton curates a menu that mirrors the vibrant cityscape, delivering a gastronomic experience that captivates the senses.
                            </li>
                            <li>
                                <i className='bi bi-check-circle'></i> Sustainable Dining: Panorama is committed to sustainability, sourcing local ingredients and crafting dishes that celebrate the region&apos;s flavors while minimizing its environmental impact.
                            </li>
                        </ul>
                        <p>
                            Every anniversary marked a new chapter, with the restaurant evolving its menu to reflect the changing seasons and emerging culinary trends. 
                            As years passed, Panorama continued to evolve while staying true to its core values. It became not just a dining destination but a cultural icon, a place where special moments unfolded against the backdrop of a breathtaking panorama. And so, the legacy of Panorama endured a culinary journey suspended in time, where each meal was a celebration of flavors and each visit a cherished memory etched against the canvas of the city&apos;s skyline.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;

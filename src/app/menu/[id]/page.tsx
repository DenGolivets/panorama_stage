'use client';

import BreadCrump from '@/app/components/BreadCrump';
import Image from 'next/image';
import React from 'react';

async function getFoodData(id: string) {
    const res = await fetch(`http://localhost:3000/api/menu/${id}`);
    return res.json();
}

const MenuSingle = async ({params}: {params: {id: string}}) => {

    const titleTextStyle: React.CSSProperties = {
        color: '#cda45e',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '16px',
        fontWeight: '700',
        textTransform: 'uppercase',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: '#cda45e',
        marginBottom: '10px',
    };

    const id = params.id;
    const food = await getFoodData(id);

    return (
        <main id='main'>
            <BreadCrump page='Menu' />
            <section className='inner-page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <Image 
                                src={food.preview}
                                alt=''
                                height={500}
                                width={500}
                                className='img-fluid img-id'
                            />
                        </div>
                        <div className='col-lg-6'>
                            <h2 className='mt-3'>
                                <span style={titleTextStyle }>Food Name:</span> {food.name}
                            </h2>
                            <h4 className='mt-2'>
                            <span style={titleTextStyle }>Ingredients:</span> <i>{food.ingredients}</i>
                            </h4>
                            <p className='mt-5'>
                            <span style={titleTextStyle }>Description:</span> {food.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default MenuSingle;

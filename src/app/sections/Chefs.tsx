'use client';

import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ChefsItem from '../components/ChefsItem';

// async function getChefsData() {
//   const res = await fetch('http://localhost:3000/api/chefs');
//   return res.json();
// }

const Chefs = () => {

  // const items: [] = await getChefsData();
  const [chefs, setChefs] = useState<any | []>([]);

  const getChefsData = () => {
    fetch('http://localhost:3000/api/chefs')
    .then(res => res.json())
    .then(data => setChefs(data))
    .catch(e => console.log(e.message));
  };

  useEffect(() => {
    getChefsData();
  }, []);

  return (
    <section id='chefs' className='chefs'>
      <div className='container' data-aos='fade-up'>
        <SectionTitle 
          title='Chefs'
          subtitle='Our Proffesional Chefs'
        />

        <div className='row'>
          {chefs &&
            chefs.length > 0 &&
            chefs.map(
              (item: {
                id: number;
                name: string;
                photo: string;
                position: string;
                delay: string;
              }) => <ChefsItem key={item.id} item={item} />
            )
          }
        </div>
      </div>
    </section>
  )
};

export default Chefs;

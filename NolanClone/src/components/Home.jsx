import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <h1>Bring your film project to life from
      idea to production</h1>
      <buttton className='btn'><Link to='/script'>Create Script</Link></buttton>
      
    </section>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="home">
      <p>Bring your film project to live from idea to production</p>
      <buttton><Link to='/script'>Create Script</Link></buttton>
      
    </section>
  );
};

export default Home;

import React from 'react';
import Header from './Header';
import Hero from './Hero';
import '../../App.css'
import Companies from './Companies';
import Product from './Product';
import Contact from './Contact';

const Dashboard: React.FC = () => {
  return (
    <div className='App'>
    <div className='whit'>
      <Header/>
      <Hero/>
    </div>
    <div>
      <Companies/>
      <Product/>
      <Contact/>
    </div>
    </div>
  );
};

export default Dashboard;

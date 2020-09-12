import React from 'react';
import SquaredCard from './SquaredCard';
import SupportCards from './SupportCards';
import TrendingApplets from './TrendingApplets';

const Cards = () => {
  return (
    <React.Fragment>
      <SquaredCard />
      <SupportCards />
      <TrendingApplets />
    </React.Fragment>
  )
}

export default Cards;

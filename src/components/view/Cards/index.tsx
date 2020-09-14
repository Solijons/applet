import React from 'react';
import SquaredCard from './SquaredCard';
import SupportCards from './SupportCards';
import TrendingApplets from './TrendingApplets';
import ProgressCards from './ProgressCards';

const Cards = () => {
  return (
    <React.Fragment>
      <SquaredCard />
      <SupportCards />
      <TrendingApplets />
      <ProgressCards />
    </React.Fragment>
  )
}

export default Cards;

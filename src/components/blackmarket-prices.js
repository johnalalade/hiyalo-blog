import React from 'react';
import './main.css';
import './style.css';

const BlackmarketPricesAPI = () => {
  const BlackmarketAPI = [
    {
      price: '50',
    },
    {
      price: '100',
    },
    {
      price: '150',
    },
    {
      price: '520',
    },
    {
      price: '250',
    },
    {
      price: '250',
    },
    {
      scrollprices:
        '>',
    },
  ];

  return (
    <div className="prices">
      {BlackmarketAPI.map((blackprices, idx) => {
        return (
          <span>
            <p>{blackprices.price}</p>
            <p>{blackprices.scrollprices}</p>
          </span>
        );
      })}
    </div>
  );
};
export default BlackmarketPricesAPI;

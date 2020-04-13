import React from 'react';
import './SuperMarketTemplate.css';

type SuperMarketTemplateProps = {
  items: JSX.Element[] | JSX.Element;
  basket: JSX.Element[] | JSX.Element;
  total: JSX.Element[] | JSX.Element;
};

const SuperMarketTemplate: React.FC<SuperMarketTemplateProps> = ({ items, basket, total }) => {
  return (
    <div className="SuperMarketTemplate">
      <div className="items-wrapper">
        <h2>상품</h2>
        {items}
      </div>
      <div className="basket-wrapper">
        <h2>장바구니</h2>
        {basket}
        {total}
      </div>
    </div>
  );
};

export default SuperMarketTemplate;

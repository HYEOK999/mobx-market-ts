import React from 'react';
import './ShopItem.css';
import { useObserver } from 'mobx-react';

export type ShopItemProps = {
  name: string;
  price: number;
  onPut(name: string, price: number): void;
};

const ShopItem: React.FC<ShopItemProps> = React.memo(({ name, price, onPut }) => {
  return useObserver(() => (
    <div className="ShopItem" onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}</div>
    </div>
  ));
});

export default ShopItem;

import React from 'react';
import './BasketItem.css';
import { useObserver } from 'mobx-react';

export type BasketItemProps = {
  item: Item;
  onTake(name: string): void;
};

type Item = {
  name: string;
  price: number;
  count: number;
};

const BasketItem: React.FC<BasketItemProps> = ({ item, onTake, children }) => {
  console.log(item.name);
  console.log('44', children);

  return useObserver(() => (
    <div className="BasketItem">
      <div className="name">{item.name}</div>
      <div className="price">{item.price}원</div>
      <div className="count">{item.count}</div>
      <div className="return" onClick={() => onTake(item.name)}>
        갖다놓기
      </div>
    </div>
  ));
};

export default BasketItem;

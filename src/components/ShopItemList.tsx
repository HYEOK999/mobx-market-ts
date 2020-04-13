import React, { useEffect } from 'react';
import ShopItem from './ShopItem';
import { useObserver } from 'mobx-react';
import useStore from '../useStore';

type Items = {
  name: string;
  price: number;
};

// type ShopItemListProps = {};

const items: Items[] = [
  {
    name: '생수',
    price: 850,
  },
  {
    name: '신라면',
    price: 900,
  },
  {
    name: '포카칩',
    price: 1500,
  },
  {
    name: '새우깡',
    price: 1000,
  },
];

const ShopItemList: React.FC = () => {
  const { market } = useStore();

  const onPut = (name: string, price: number): void => {
    market.put(name, price);
  };

  return useObserver(() => {
    const itemList = items.map((item) => <ShopItem {...item} key={item.name} onPut={onPut} />);
    return <div>{itemList}</div>;
  });
};

export default ShopItemList;

import React from 'react';
import BasketItem from './BasketItem';
import { useObserver } from 'mobx-react';
// import useStore from '../useStore';
import { useRootData } from '../hook';

// export type BasketItemListProps = {};

const BasketItemList: React.FC = () => {
  // const { market } = useStore();
  const market = useRootData((store) => store.market);

  const onTake = (name: string): void => {
    market.take(name);
  };

  return useObserver(() => {
    const itemList = market.selectedItems.map((item) => (
      <BasketItem item={item} key={item.name} onTake={onTake} />
    ));
    return <div>{itemList}</div>;
  });
};

export default BasketItemList;

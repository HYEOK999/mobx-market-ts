import React from 'react';
import { useObserver } from 'mobx-react';
import useStore from '../useStore';

// type TotalPriceProps = {};

const TotalPrice: React.FC = () => {
  const { market } = useStore();
  console.log('total');
  return useObserver(() => (
    <div>
      <hr />
      <p>
        <b>총합: </b> {market.total}원
      </p>
    </div>
  ));
};

export default TotalPrice;

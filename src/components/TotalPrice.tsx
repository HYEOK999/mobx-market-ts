import React from 'react';
import { useObserver } from 'mobx-react';
import { toJS } from 'mobx';
import { useRootData } from '../hook';

const TotalPrice: React.FC = () => {
  const { market } = useRootData((store) => store);
  console.log('total', toJS(market));
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

import React from 'react';
import { useObserver } from 'mobx-react';
// import useStore from '../useStore';
import { toJS } from 'mobx';
import { useRootData } from '../hook';

const Counter: React.FC = ({ children }) => {
  // const { counter } = useStore();
  const { counter, market } = useRootData((store) => store);

  const increase = () => {
    counter.increase();
  };

  const decrease = () => {
    counter.decrease();
  };

  console.log('151521', market.selectedItems[0]);
  console.log('5151125125', toJS(market));

  return useObserver(() => (
    <div>
      {console.log('212312')}
      <h1>{counter.number}</h1>
      <h2>asdasdasd{market.selectedItems[0] && market.selectedItems[0].name}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  ));
};

export default Counter;

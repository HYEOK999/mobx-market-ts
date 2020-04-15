// import { counter } from './stores/counter';
// import { market } from './stores/market';

// const useStore = () => {
//   return { counter, market };
// };

// export default useStore;
import React from 'react';
import { useObserver } from 'mobx-react-lite';

const useStore = <Selection, ContextData, Store>(
  context: React.Context<ContextData>,
  storeSelector: (contextData: ContextData) => Store,
  dataSelector: (store: Store) => Selection,
) => {
  const value = React.useContext(context);
  if (!value) {
    // type safe
    throw new Error();
  }
  const store = storeSelector(value);
  return useObserver(() => {
    return dataSelector(store);
  });
};

export default useStore;

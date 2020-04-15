import React, { createContext } from 'react';
import { createStore, TStore } from './stores/store';
import { useLocalStore } from 'mobx-react';

// Context 생성
const storeContext = createContext<TStore | null>(null);

const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createStore);

  return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
};

export { storeContext, StoreProvider };

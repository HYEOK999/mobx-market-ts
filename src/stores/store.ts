import { counter } from './counter';
import { market } from './market';

export const createStore = () => {
  const store = {
    counter,
    market,
  };

  return store;
};
console.log('1', typeof createStore);

export type TStore = ReturnType<typeof createStore>;

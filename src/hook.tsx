import { storeContext } from './context';
import { TStore } from './stores/store';
import useStore from './useStore';

export const useRootData = <Selection,>(dataSelector: (store: TStore) => Selection) =>
  useStore(storeContext, (contextData) => contextData!, dataSelector);

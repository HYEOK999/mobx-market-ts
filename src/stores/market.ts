import { observable, toJS, isObservableObject } from 'mobx';
import { counter } from './counter';

type Item = {
  name: string;
  price: number;
  count: number;
};

type Market = {
  selectedItems: Item[];
  put(name: string, price: number): void;
  take(name: string): void;
  total(): number;
};

const market: Market = observable<Market>({
  selectedItems: [],
  put(name, price) {
    const exists = this.selectedItems.find((item: Item) => item.name === name);
    if (!exists) {
      console.log('5555', isObservableObject(toJS(this.selectedItems))); // true

      this.selectedItems.push({
        name,
        price,
        count: counter.number,
      });
      return;
    }
    exists.count += counter.number;
  },
  take(name) {
    const itemToTake: Item | undefined = this.selectedItems.find(
      (item: Item) => item.name === name,
    );
    if (itemToTake) {
      itemToTake.count--;
      // console.log('4444', isObservableObject(toJS(this.selectedItems)));
      // console.log('5555', toJS(itemToTake.name));
      if (itemToTake.count <= 0) {
        // this.selectedItems.remove(itemToTake); // 배열에서 제거처리합니다.
        this.selectedItems = this.selectedItems.filter((i) => i.name !== itemToTake.name); // 배열에서 제거처리합니다.
      }
    }
  },
  get total() {
    console.log('총합 계산...');
    return this.selectedItems.reduce((previous: number, current: Item) => {
      return previous + current.price * current.count;
    }, 0);
  },
});

export { market };

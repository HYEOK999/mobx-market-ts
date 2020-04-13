import { observable } from 'mobx';

type Counter = {
  number: number;
  increase(): void;
  decrease(): void;
};

const counter = observable<Counter>({
  number: 1,
  increase() {
    this.number++;
  },
  decrease() {
    this.number--;
  },
});

export { counter };

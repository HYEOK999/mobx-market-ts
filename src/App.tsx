import React from 'react';
import Counter from './components/Counter';
import SuperMarket from './components/SuperMarket';
import { StoreProvider } from './context';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Counter />
        <hr />
        <SuperMarket />
      </div>
    </StoreProvider>
  );
}

export default App;

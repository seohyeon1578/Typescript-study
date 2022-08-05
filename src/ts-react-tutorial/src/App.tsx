import React from 'react';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    // <Counter/>
    // <MyForm onSubmit={onSubmit}/>
    <ReducerSample />
  );
}

export default App;

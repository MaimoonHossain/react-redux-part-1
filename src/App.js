import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const addByTen = () => {
    dispatch({ type: 'ADD_BY_TEN', payload: 10 });
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addByTen}>Add By 10</button>
    </div>
  );
}

export default App;

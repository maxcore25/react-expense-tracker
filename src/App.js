import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { Header } from './components/Header';
import "./index.css";

function App() {
  const [budget, setBudget] = useState(100000)

  return (
    <div className="app-container">
      <Header budget={budget}> setBudget={setBudget}</Header>

      <main className="main-layout">
        <div className='flex gap-4 col-size-4'>
            <h1 className="text-bold">Hello World</h1>
            <h3 className="text-size-xl"> Another one</h3>
        </div>
      </main>
    </div>
  );
}

export default App;
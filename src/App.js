import logo from './logo.svg';
import './App.css';
import UseStateHook from './components/UseStateHook';
import UseEffectHook from './components/UseEffectHook';
import UseRefhook from './components/UseRefHook';

function App() {
  return (
    <div className="App">
      <h1>Practice of Hooks</h1>
      <hr />
      <UseStateHook/>
      <br />
      <hr />
      <UseEffectHook/>
      <br />
      <hr />
      <UseRefhook/>
    </div>
  );
}

export default App;
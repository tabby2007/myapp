import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <h1>Welcome to learning reactjs</h1>
      <h2>React is fun</h2>

      
      </header>
      {/*Below we render/display/show our components */}
      <Firstcomponent/>
      <Secondcomponent/>
    </div>
  );
}

export default App;

//jsx
import './App.css';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';

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
      <Thirdcomponent/>
      <Fourthcomponent/>
      <Fifthcomponent/>
    </div>
  );
}

export default App;

//jsx
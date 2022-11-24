import logo from './logo.svg';
import './App.css';
import Routing from './Component/Routing';
import { Provider } from 'react-redux';
import store from './ReduxTool/Store'

function App() {
  return (
    <div className="App">
    <Provider store={store}>
     <Routing/>
    </Provider>
    </div>
  );
}

export default App;

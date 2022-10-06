

import LayOut from './components/LayOut';

import './css/App.css'
import Home from './pages/Home';
function App() {
  return (
    <div className='App'  >

      <LayOut>
        <Home />

      </LayOut>



    </div>
  );
}

export default App;

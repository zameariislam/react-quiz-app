

import LayOut from './components/LayOut';

import './css/App.css'
import Quiz from './pages/Quiz';

import SignUp from './pages/SignUp';
function App() {
  return (
    <div className='App'  >

      <LayOut>
      <Quiz/>

      </LayOut>



    </div>
  );
}

export default App;

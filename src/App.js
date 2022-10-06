

import LayOut from './components/LayOut';

import './css/App.css'

import Result from './pages/Result';
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Quiz from './pages/Quiz'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className='App'  >
      <BrowserRouter>
      <LayOut>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/signup'  element={<SignUp/>}/>
        <Route path='/quiz'  element={<Quiz/>}/>
        <Route path='/result'  element={<Result/>}/>


      </Routes>

      </LayOut>
      
      


      </BrowserRouter>

     



    </div>
  );
}

export default App;

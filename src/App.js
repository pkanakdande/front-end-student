import logo from './logo.svg';
// import './App.css';
import Students from './component/Students';
import Score from './component/Score';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
   <>
     {/* <Students/> */}
     
     <BrowserRouter>
          <Routes>
             <Route path='/' element={<Students/>}></Route>
             <Route path='/score' element={<Score/>}></Route>
          </Routes>
       </BrowserRouter>
       </>
  )
}

export default App;


import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Front from './components/front';
import Shop from './components/Shop';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Front/>}/>
        <Route path='/Shop' element={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;

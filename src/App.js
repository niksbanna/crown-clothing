import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';

const HatsPage = () => {
  return <h1>HATS</h1>
}
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/hats' element={<HatsPage />} />
      </Routes>

    </div>
  );
}

export default App;

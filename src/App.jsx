import {Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import ShortPage from './components/Pages/ShortPage';

function App() {
  return (
    <Routes>
      <Route path='/my-react-app/' element={<Home />} />
      <Route path='/my-react-app/short-page' element={<ShortPage />} />
    </Routes>
  )
}

export default App;

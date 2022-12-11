import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BiometricForm from './pages/biometricsform';
import FinishForm from './pages/finishform';
import PersonalInformationForm from './pages/personalinfoform';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BiometricForm />} />
          <Route path='/personalinfo' element={<PersonalInformationForm />} />
          <Route path='/finish' element={<FinishForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
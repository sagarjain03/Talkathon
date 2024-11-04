
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App

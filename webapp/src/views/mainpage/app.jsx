import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../../layouts/header/Header.jsx';
import LoginPage from '../loginpage/LoginPage.jsx';


function App() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    );
}

const Home = () => {
    return (
        <div>
            <h2>로그인 버튼 클릭</h2>
            <Link to="/login">
            <Button variant="outline-secondary">로그인</Button>
            </Link>
        </div>
    )
}
export default App
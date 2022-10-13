import { AdminPage, Login, VisitorPage, LandingPage} from './pages';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavBar } from './components';
import ProtectedRoutes from './components/ProtectedRoutes';
import {Spinner} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const isLoading = useSelector(state => state.isLoading);
  
  return (
   
    <HashRouter>
     <NavBar /> 
      <Container>
        { isLoading && <Spinner color="success"/>}
        <Routes>
        <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
          <Route path='/admin' element={<AdminPage/>} />
          <Route path='/visitor' element={<VisitorPage/>} />
        </Route>

        </Routes>
       </Container>


    </HashRouter>
  );
}

export default App;

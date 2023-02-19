import React from 'react'
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Auth from './components/Auth/Auth';



function App() {





  return (
    <Router>

      <Container maxWidth='lg'>
        <Navbar />
        <Switch>
          <Route path='/auth'> <Auth/> </Route>
          <Route path='/' >   <Home /> </Route>
        
 
        </Switch>

      </Container>
    </Router>
  );
}

export default App;

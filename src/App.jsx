import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Navbar from './navbar';
import About from './about';
import Service from './service';
import Contact from './contact';


function App() {

  return (
    <>
      <Router>
        <div className='App'>
        <Navbar />
          <Switch>
            <Route exact path ="/">
               <Home />
            </Route>
            <Route path ="/about">
               <About />
            </Route>
            <Route path ="/service">
               <Service />
            </Route>
            <Route path ="/contact">
               <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App

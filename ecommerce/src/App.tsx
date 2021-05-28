import React from 'react';

import './App.css';
import Homescreen from "./screens/Homescreen"
import {BrowserRouter as Router,Route,NavLink} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <React.Fragment>
            <Router>
               <div className="grid-container">
                  <header className="row">
                     <div>
                        <NavLink to="/" exact={true} strict className="brand">AshokIT</NavLink>
                     </div>
    
                     <div>
                         <NavLink to="/" exact={true} strict>cart</NavLink>
                         <NavLink to="/" exact={true} strict>signin</NavLink>
                     </div>
                  </header>
    
                  <main>
                      <Route path="/" component={Homescreen} exact={true} strict></Route>
                  </main>
    
                  <footer className="row center">
                      copyright@ashokit.in
                  </footer>
               </div>
               
            </Router>
         </React.Fragment>
      
      
    </div>
  );
}

export default App;

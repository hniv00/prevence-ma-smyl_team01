import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Button } from 'reactstrap';

import {HelloPage} from "./components/pages/HelloPage"
import {ExamPage} from "./components/pages/ExamPage"

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HelloPage} />
          <Route path="/vysetreni" component={ExamPage} />
          <Route path="/admin-login" component={ExamPage} />
        </Switch>
      </BrowserRouter>

    );
  }
}



/* Default... */
// Keeping this here for reference, will be removed in the future
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;

import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Button } from 'reactstrap';

import {HelloPage} from "./components/pages/HelloPage"
import {ExamPage} from "./components/pages/ExamPage"
import {LoginPage} from "./components/pages/LoginPage"
import {AdminLandingPage} from "./components/pages/AdminLandingPage"
import {AdminExamination} from "./components/pages/AdminExamination"
import {AdminExams} from "./components/pages/AdminExams"
import {PartnersPage} from "./components/pages/PartnersPage"
import {StoriesPage} from "./components/pages/StoriesPage"
import {AdminDiagnosis} from "./components/pages/AdminDiagnosis"
import {AdminDiagnosisPage} from "./components/pages/AdminDiagnosisPage"
import {ContactPage} from "./components/pages/ContactPage"
import {AdminStories} from "./components/pages/AdminStories"
import {AdminStoriesPage} from "./components/pages/AdminStoriesPage"

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/configureStore';;

const {store, persistor} = configureStore();

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
              <Switch>
                <Route exact path="/" component={HelloPage} />
                <Route path="/vysetreni" component={ExamPage} />
                <Route path="/admin-login" component={LoginPage} />
                <Route path="/admin-lp" component={AdminLandingPage} />
                <Route path="/admin-vysetreni" component={AdminExamination} />
                <Route path="/admin-seznam-vysetreni" component={AdminExams} />
                <Route path="/partneri" component={PartnersPage} />
                <Route path="/pribehy" component={StoriesPage} />
                <Route path="/admin-diagnozy" component={AdminDiagnosis} />
                <Route path="/admin-seznam-diagnoz" component={AdminDiagnosisPage} />
                <Route path="/kontakty" component={ContactPage} />
                <Route path="/admin-pribehy" component={AdminStories} />
                <Route path="/admin-seznam-pribehu" component={AdminStoriesPage} />

              </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
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

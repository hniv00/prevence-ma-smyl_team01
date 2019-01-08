import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HelloPage } from './components/pages/HelloPage';
import { ExamPage } from './components/pages/ExamPage';
import { LoginPage } from './components/pages/LoginPage';
import { AdminLandingPage } from './components/pages/AdminLandingPage';
import { AdminExamination } from './components/pages/AdminExamination';
import { AdminExams } from './components/pages/AdminExams';
import { PartnersPage } from './components/pages/PartnersPage';
import { StoriesPage } from './components/pages/StoriesPage';
import { AdminDiagnosis } from './components/pages/AdminDiagnosis';
import { AdminDiagnosisPage } from './components/pages/AdminDiagnosisPage';
import { ContactPage } from './components/pages/ContactPage';
import { AdminStories } from './components/pages/AdminStories';
import { AdminStoriesPage } from './components/pages/AdminStoriesPage';
import { AdminBlog } from './components/pages/AdminBlog';
import { AdminBlogPage } from './components/pages/AdminBlogPage';
import { AdminIndication } from './components/pages/AdminIndication';
import { AdminIndicationPage } from './components/pages/AdminIndicationPage';
import { AdminEvent } from './components/pages/AdminEvent';
import { AdminEventPage } from './components/pages/AdminEventPage';
import { EventsPage } from './components/pages/EventsPage';
import { Blog } from './components/pages/Blog';
import { AboutProject } from './components/pages/AboutProject';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/configureStore';

const { store, persistor } = configureStore();

class App extends Component {
  render() {
    return (
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
              <Route path="/akce" component={EventsPage} />
              <Route path="/blog" component={Blog} />
              <Route path="/projekt" component={AboutProject} />
              <Route path="/admin-diagnozy" component={AdminDiagnosis} />
              <Route
                path="/admin-seznam-diagnoz"
                component={AdminDiagnosisPage}
              />
              <Route path="/kontakty" component={ContactPage} />
              <Route path="/admin-pribehy" component={AdminStories} />
              <Route
                path="/admin-seznam-pribehu"
                component={AdminStoriesPage}
              />
              <Route path="/admin-clanky" component={AdminBlog} />
              <Route path="/admin-seznam-clanku" component={AdminBlogPage} />
              <Route path="/admin-akce" component={AdminEvent} />
              <Route path="/admin-seznam-akci" component={AdminEventPage} />
              <Route path="/admin-indikace" component={AdminIndication} />
              <Route
                path="/admin-seznam-indikaci"
                component={AdminIndicationPage}
              />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

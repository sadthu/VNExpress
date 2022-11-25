import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import {unstable_HistoryRouter as HistoryRouter, Routes, Route} from 'react-router-dom'
import HomeTemplates from './templates/HomeTemplates';
import Home from './pages/Home';
import Register from './pages/Register';

export const history:any = createBrowserHistory();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path='' element={<HomeTemplates/>}>
          <Route index element={<Home/>}></Route>
          <Route path='register' element={<Register/>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>

  </Provider>
);

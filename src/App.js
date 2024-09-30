import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store';
import retryableLazy from './utility/retryableLazy';
import Loading from './components/FALoading/FALoading';
import { AppCotainer } from './appStyles';
import { ConfigProvider } from "antd";
import theme from './styles/antdTheme';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { getData } from './utility/localStorageUtility';
import { isEmpty } from 'lodash';

const Login = retryableLazy(() => import("./modules/login/Login"))
const Dashbord = retryableLazy(() => import("./modules/dashbord/Dashboard.container"))

function App() {
  return (
    <React.StrictMode>
      <ConfigProvider theme={theme}>
        <AppCotainer>
          <Suspense fallback={<Loading open />}>
            <Provider store={store}>
              <Router>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/dashboard" element={<PrivateRoute><Dashbord /></PrivateRoute>} />
                </Routes>
              </Router>
            </Provider>
          </Suspense>
        </AppCotainer>
      </ConfigProvider>
    </React.StrictMode>
  );
}

export default App;

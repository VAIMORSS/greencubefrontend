import './App.css';
import Users from './views/Users';
import Dashboard from './views/Dashboard';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store} >
      <Dashboard />
      <Users />
    </Provider>
  );
}

export default App;


import './App.css';
import FriendList from './mocks/components/FriendsList';
import AddFriend from './mocks/components/AddFriend';
import Logout from './mocks/components/Logout';
import Login from './mocks/components/Login';

import { Switch, Route } from 'react-router-dom';
import Header from './mocks/components/Header';
import AuthContextProvider from './context/AuthContext';
import ProtectedRoute from './mocks/components/PRotectedRoute';



function App() {

  return (
    <AuthContextProvider>
      <div className="App">
        <Header />
        <Switch>

          <Route path="/Login" component={Login} />
          <ProtectedRoute path="/friends">
            <FriendList />
          </ProtectedRoute>
          <ProtectedRoute path="/friendsAdd">
            <AddFriend />
          </ProtectedRoute>
          <ProtectedRoute path="/Logout">
            <Logout />
          </ProtectedRoute>
        </Switch>

      </div>
    </AuthContextProvider>
  );

}

export default App;

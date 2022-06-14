import './App.css';
import { Route, Routes } from "react-router-dom";
import UserProfile1 from './Views/Auth/UserProfile1';
import UserProfile2 from './Views/Auth/UserProfile2';
import UserProfile3 from './Views/Auth/UserProfile3';
import UserProfile4 from './Views/Auth/UserProfile4';
import UserProfile5 from './Views/Auth/UserProfile5';
import AuthHeader from './Containers/AuthHeader/authHeader'
import View from './Views/view'

function App() {
  return (
      // <View />
      // <UserProfile2 />
      <>

      {/* <AuthHeader /> */}

      <Routes>
              <Route  path="/" element={<UserProfile2 />} />
              <Route path="/user1" element={<UserProfile3 />} />
              <Route path="/user2" element={<UserProfile4 />} />
              <Route path="/user3" element={<UserProfile5 />} />
              <Route  path="/user4" element={<UserProfile1 />} />
              <Route path="/view" element={<View />} />
            </Routes>
      </>
  );
}

export default App;

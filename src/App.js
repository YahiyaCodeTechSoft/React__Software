import './App.css';
import { Route, Routes } from "react-router-dom";
import UserProfile2 from './Views/Auth/UserProfile2';
import UserProfile3 from './Views/Auth/UserProfile3';
import View from './Views/view'

function App() {
  return (
      // <View />
      // <UserProfile2 />
      <Routes>
              <Route  path="/" element={<UserProfile2 />} />
              <Route path="/user2" element={<UserProfile3 />} />
              <Route path="/view/*" element={<View />} />
            </Routes>

  );
}

export default App;

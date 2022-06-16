import './App.css';
import { Route, Routes } from "react-router-dom";
import UserProfile2 from './Views/Auth/UserProfile2';
import View from './Views/view'

function App() {
  return (
    
    <>
      <Routes>
              <Route  path="/" element={<UserProfile2 />} />
              <Route path="/view" element={<View />} />
            </Routes>
      </>
  );
}

export default App;

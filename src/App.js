import "./App.css";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Components/Signin/Signin";
import Feed from "./Components/Feed/Feed";
import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<PrivateRoute><Feed /></PrivateRoute> } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

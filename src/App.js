import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route,Router } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Buy from "./pages/Buy";
import NoPage from "./pages/NoPage";
import Rent from "./pages/Rent";
import PrivateRoute from "./pages/PrivateRoute";
import Profile from "./pages/user/Profile";
import AuthWrapper from "./pages/AuthWrapper";

function App() {
  return (
    <div className="App">
         <AuthWrapper>
         <BrowserRouter>
        <Routes>
      
          <Route path="/" element={<Layout/>}>
          <Route path="dashboard" element={<PrivateRoute>
            <Profile/>
          </PrivateRoute>}/>
            {/* <PrivateRoute>
              <Route path="profile" element={<Profile/>}/>
            </PrivateRoute> */}
            <Route index element={<Home />} />
            <Route path="buy" element={<Buy />} />
            <Route path="rent" element={<Rent />} />

            <Route path="*" element={<NoPage />} />
            </Route>
          
        </Routes>
      </BrowserRouter>
      </AuthWrapper>
    </div>
    
  );
}

export default App;

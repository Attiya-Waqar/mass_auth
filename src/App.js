import Login from "./pages/loginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/registerForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      	<Route path='/register' element={<Register/>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

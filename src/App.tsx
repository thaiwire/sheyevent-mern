import { Button, Input } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ThemProvider from "./theme";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import Homepage from "./pages/private/home";

function App() {
  return (
    <ThemProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </ThemProvider>
  );
}

export default App;

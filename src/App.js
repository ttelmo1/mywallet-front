import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import WalletProvider from "./contexts/WalletContext";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <WalletProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            {/* <Route path="/home" element={<Home />} /> */}
            {/* <Route path="/nova-entrada" element={<NewEntry />} /> */}
            {/* <Route path="/nova-saida" element={<NewExit />} /> */}
          </Routes>
        </WalletProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

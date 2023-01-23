import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import WalletProvider from "./contexts/WalletContext";
import HomePage from "./pages/HomePage/HomePage";
import NewEntry from "./pages/IncomePage/NewEntry";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewExit from "./pages/OutcomePage/NewExit";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <WalletProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/nova-entrada" element={<NewEntry />} />
            <Route path="/nova-saida" element={<NewExit />} />
          </Routes>
        </WalletProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

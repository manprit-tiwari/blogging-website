import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/signin" element={<UserAuthForm type="sign-in" />} />
        <Route path="/signup" element={<UserAuthForm type="sign-up" />} />
      </Route>
    </Routes>
  );
}

export default App;

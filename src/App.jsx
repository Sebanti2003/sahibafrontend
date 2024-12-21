import Home from "./pages/Home";
// import Intropage from "./components/Intropage";
// import New from "./pages/New";
// import Intropage from "./pages/Intropage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Discountcontinuous from "./components/Discountcontinuous";
import { store } from "./store/store";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
function App() {
  return (
    <Provider store={store}>
      <div className="py-1">

        <BrowserRouter>
          <Discountcontinuous />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>

  );
}

export default App;

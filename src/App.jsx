import Home from "./pages/Home";
// import Intropage from "./components/Intropage";
// import New from "./pages/New";
// import Intropage from "./pages/Intropage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Discountcontinuous from "./components/Discountcontinuous";
import { store } from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="py-1">
        <Discountcontinuous />
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>

  );
}

export default App;

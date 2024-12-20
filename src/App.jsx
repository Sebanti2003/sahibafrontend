import Home from "./components/Home";
// import Intropage from "./components/Intropage";
// import New from "./pages/New";
// import Intropage from "./pages/Intropage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Discountcontinuous from "./components/Discountcontinuous";
function App() {
  return (
    <div className="py-1">
      <Discountcontinuous/>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

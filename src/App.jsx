import Home from "./components/Home";
// import Intropage from "./components/Intropage";
// import New from "./pages/New";
// import Intropage from "./pages/Intropage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="py-1">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

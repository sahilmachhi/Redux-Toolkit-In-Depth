import From from "./Components/From/From";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<From />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

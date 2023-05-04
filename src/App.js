import "./App.css";
import Main from "./components/Main";
import MapPopUp from "./components/MapPopUp";
// import App from "./components/Index"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyDetail from "./components/PropertyDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Main isMarkerShown={false} /> */}
        <Routes>
          {/* <Route path="/main" element={} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/property" element={<PropertyDetail />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

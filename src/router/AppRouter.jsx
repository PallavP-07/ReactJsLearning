import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// pages
import HomePage from "../pages/HomePage";
import ImageSelector from "../pages/ImageSelector";
import ImageUploader from "../pages/ImageUploader";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/image-selector" element={<ImageSelector />}></Route>
        <Route path="/image-uploader" element={<ImageUploader />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;

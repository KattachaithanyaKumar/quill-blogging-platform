import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/home" Component={Home} />
      </Routes>
      <Toaster position="top-right" />
    </BrowserRouter>
  );
};

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './views/HomeView';
import ErrorView from './views/ErrorView';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
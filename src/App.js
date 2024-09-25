import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hogar from './pages/Hogar';
import Productos from "./pages/Productos";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Tarea from "./pages/Tarea";
import Carros from "./pages/Carros";
import Mercado from "./pages/Mercado";
import Hotel from "./pages/Hoteles";
import Materias from "./pages/Materias";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hogar />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/tarea" element={<Tarea />} />
          <Route path="/carros" element={<Carros />} />
          <Route path="/mercado" element={<Mercado />} />
          <Route path="/materias" element={<Materias />} />
          <Route path="/hotel" element={<Hotel />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;


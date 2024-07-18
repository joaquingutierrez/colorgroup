import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';
import { Home, Services, About, Contact } from "./views"
import { Header, Footer, NotFoundPage } from "./componentsContainer";

function App() {

  const links = [
    {
        title: "Servicios",
        path: "/services"
    },
    {
        title: "Nostros",
        path: "/about"
    },
    {
        title: "¿Hablamos?",
        path: "/contact",
        special: true
    }
]

  return (
    <BrowserRouter>
      <Header links={links} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer links={links} />
    </BrowserRouter>
  );
}

export default App;

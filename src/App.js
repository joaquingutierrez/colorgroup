import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';
import { Home, Services, About, Contact } from "./views"
import { Header, Footer, NotFoundPage } from "./componentsContainer";
import { LanguageProvider } from "./context/languageContext";

function App() {

  const translationsLinks = {
    spanish: [
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
    ],
    english: [
      {
        title: "Services",
        path: "/services"
      },
      {
        title: "About Us",
        path: "/about"
      },
      {
        title: "Let's talk",
        path: "/contact",
        special: true
      }
    ],
    italian: [
      {
        title: "Servizi",
        path: "/services"
      },
      {
        title: "Chi siamo",
        path: "/about"
      },
      {
        title: "Parliamo",
        path: "/contact",
        special: true
      }
    ]
  }

  return (
    <BrowserRouter>
      <LanguageProvider>
        <Header links={translationsLinks} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer links={translationsLinks} />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import './componentes/styles/components/layout/Header.css';
import './componentes/styles/components/layout/Footer.css';
import './componentes/styles/components/layout/Nav.css';

import './componentes/styles/components/pages/HomePage.css';
import './componentes/styles/components/pages/NosotrosPage.css';
import './componentes/styles/components/pages/contactoPages.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import ContactoPage from './componentes/pages/ContactoPage';
import HomePage from './componentes/pages/Homepage';
import NosotrosPage from './componentes/pages/NosotrosPage';
import NovedadesPage from './componentes/pages/NovedadesPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="novedades" element={<NovedadesPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

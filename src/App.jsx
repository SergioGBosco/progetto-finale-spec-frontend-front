import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import HomePage from "./assets/pages/HomePage"
import FruitDetail from "./assets/pages/FruitDetail"
function App() {


  return (
    <>
      {/* Creazione delle rotte base dell'app Home Page e pagina di dettaglio  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fruit/:id" element={<FruitDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FruitDetail from "./pages/FruitDetail"
import { GlobalProvider } from "./context/GlobalContext"
function App() {


  return (
    <>
      {/* Creazione delle rotte base dell'app Home Page e pagina di dettaglio  */}
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fruit/:id" element={<FruitDetail />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App

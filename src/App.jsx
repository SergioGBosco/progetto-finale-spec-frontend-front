import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FruitDetail from "./pages/FruitDetail"
import { GlobalProvider } from "./context/GlobalContext"

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fruit/:id" element={<FruitDetail />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App

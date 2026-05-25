
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { CreateRequest } from "./pages/CreateRequest"
import MapPage from "./pages/MapPage"
function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/create" element={<CreateRequest/>}/>
      <Route path="/map" element={<MapPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

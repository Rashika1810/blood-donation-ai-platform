
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { CreateRequest } from "./pages/CreateRequest"
function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/create" element={<CreateRequest/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

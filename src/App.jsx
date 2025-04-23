import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Roles from "./components/Roles"
import Students from "./components/Students"
import Layout from "./layout"


function App() {
  return (
    <BrowserRouter >
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/students" element={<Students/>} />
          <Route path="/roles" element={<Roles/>} />
        </Routes>
      </Layout>
    </BrowserRouter >
  )
}

export default App

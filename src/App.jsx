import { Route, Router, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Roles from "./components/Roles"
import Students from "./components/Students"
import Layout from "./layout"


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/students" element={<Students/>} />
          <Route path="/roles" element={<Roles/>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

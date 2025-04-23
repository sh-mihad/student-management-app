import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Roles from "./components/Roles"
import Layout from "./layout"
import StudentsPage from "./pages/Students"


function App() {
  return (
    <BrowserRouter >
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/students" element={<StudentsPage/>} />
          <Route path="/roles" element={<Roles/>} />
        </Routes>
      </Layout>
    </BrowserRouter >
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Roles from "./components/Roles"
import Layout from "./layout"
import StudentsPage from "./pages/Students"


function App() {
  return (
    <BrowserRouter >
      <Layout>
        <Routes>
          <Route path="/" element={<StudentsPage/>} />
          <Route path="/roles" element={<Roles/>} />
        </Routes>
      </Layout>
    </BrowserRouter >
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact, Home, Layout, ProjectPage} from "./router";
import { About } from "./screen/About/About";



export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Layout><ProjectPage/></Layout>} />
        <Route path="/contact" element={<Layout><Contact/></Layout>} />
        <Route path="/about" element={<Layout><About/></Layout>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

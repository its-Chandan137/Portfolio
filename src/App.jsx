import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Layout, ProjectPage} from "./router";



export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Layout><ProjectPage/></Layout>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

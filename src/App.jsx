import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home} from "./router";


export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/hero" element={<Layout><Hero/></Layout>} />
        <Route path="/family" element={<Layout><Family/></Layout>} />
        <Route path="/add-ons" element={<Layout><AddOns/></Layout>} />
        <Route path="/login" element={<Layout><Login/></Layout>} />
        <Route path="/register" element={<Layout><Register/></Layout>} />
        <Route path="/subs" element={<Layout><Subscriptions/></Layout>} />
        <Route path="/about" element={<Layout><About/></Layout>} />
        <Route path="/profile" element={<Layout><Profile/></Layout>} />
        <Route path="/Subscribed" element={<Layout><Subscribed/></Layout>} />
        <Route path="/assistant" element={<Layout><Assistant/></Layout>} />
        <Route path="/links" element={<Layout><Links/></Layout>} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
